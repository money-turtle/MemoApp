import { 
    View, StyleSheet, Text, TextInput, KeyboardAvoidingView
} from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const Edit = ():JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline value={'買い物\nリスト'} style={styles.input}/>
                
                <CircleButton>
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

export default Edit