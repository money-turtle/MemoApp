import { 
    View, Text, StyleSheet, TextInput, TouchableOpacity
} from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'

const handlePress = (): void => {
    //ログイン
    router.replace('/memo/list')//pushというのは画面遷移の履歴にこちらの指定した画面を追加するという関数

}

const Login = (): JSX.Element => {
    const [email, setEmail] = useState('')//分割代入の一種
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input} 
                    value={email} 
                    onChangeText={(text) => { setEmail(text) }}
                />
                <TextInput style={styles.input} value='Password' />
                <Button label='Submit' onPress={handlePress} />
                
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
                    </View>
                
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#F0F4F8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'

    }
})

export default Login
