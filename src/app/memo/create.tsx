import { 
    View, StyleSheet, Text, TextInput, KeyboardAvoidingView
} from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router } from 'expo-router'

const hadlePress = (): void => {
    router.back()
}

const Create = ():JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline value='' style={styles.input}/>
                
                <CircleButton onPress={hadlePress}>
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