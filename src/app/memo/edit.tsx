import { 
    View, StyleSheet, Text, TextInput,
    Alert
} from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { type Memo } from '../../../types/memo'
import { auth, db } from '../../config'
import KeyboardAvoidingView from '../../components/KeybordAvoidingVeiw'

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) {return}
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    setDoc(ref, {
        bodyText: bodyText,
        updatedAT: Timestamp.fromDate(new Date()),
    })
        .then(() => {
            router.back()
        })
        .catch((error) => {
            console.log(error)
            Alert.alert('更新に失敗しました')
        })

}


const Edit = ():JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
        .then((docRef) => {
            //console.log(docRef.data())
            const RemoteBodyText = docRef?.data()?.bodyText
            setBodyText(RemoteBodyText)
        })
        .catch((error) => {
         console.log(error)
        })
    }, [])
    //console.log('edit', id)

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                multiline
                value={bodyText}
                style={styles.input}
                onChangeText={(text) => { setBodyText(text) }}
                autoFocus
                />
                
                <CircleButton onPress={ () => { handlePress(id, bodyText) }}>
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
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',//androidのみtextをtopに持ってくることができる
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27
    }


})

export default Edit