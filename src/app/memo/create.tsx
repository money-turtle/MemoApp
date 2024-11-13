import { 
    View, StyleSheet, Text, TextInput
} from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import { useState } from 'react'
import KeyboardAvoidingView from '../../components/KeybordAvoidingVeiw'

const handlePress = (bodyText :string): void => {
    if (auth.currentUser === null){ return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)//バックティック`は文字列の中で変数を使いたい場合に使う
    addDoc(ref, {
        bodyText,//キーと変数名が同じ場合は、一つに省略できる。
        updatedAt: Timestamp.fromDate(new Date())
    })
     .then((docRef) => {//成功するとコールバック関数にドキュメントへの参照が入ってくる
        console.log('success', docRef.id)
        router.back()
     })
     .catch((error) => {
        console.log(error)
     })
    

    //↓公式は以下。asyncを使うとコールバックの入れ子を避けることができるのがメリット
    /*
    await addDoc(collection(db, 'memos'), {
        bodyText: 'test 2'
     })
     .catch((error) => {
        console.log(error)
    }
     router.back()
     */
}

const Create = ():JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                 multiline
                 style={styles.input}
                 value={bodyText}
                 onChangeText={(text) => { setBodyText(text) }}
                 autoFocus
                />
                
                <CircleButton onPress={() => { handlePress(bodyText) }}>
                    <Icon name='check' size={40} color='white' />            
                </CircleButton>
            </View>
        </KeyboardAvoidingView>
    )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',//androidのみtextをtopに持ってくることができる
        fontSize: 16,
        lineHeight: 24
    }


})

export default Create