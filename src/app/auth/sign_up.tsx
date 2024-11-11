import { 
    View, Text, StyleSheet, TextInput, TouchableOpacity
} from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'

const handlePress = (): void => {
    //会員登録
    router.push('/memo/list')//pushというのは画面遷移の履歴にこちらの指定した画面を追加するという関数
}


const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')//分割代入の一種
    const [password, setPassword] = useState('')//分割代入の一種

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input} 
                    value={email} 
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email Address'
                    textContentType='emailAddress'
                />
                <TextInput
                    style={styles.input} 
                    value={password} 
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize='none'//最初の入力文字を小文字に
                    secureTextEntry//伏せ字
                    placeholder='Password'//空白時の入力文字列。薄く表示される。
                    textContentType='password'//キーチェーンにPWが入っているとそれを使える
                />

                <Button label='Submit' onPress={handlePress} />

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log in.</Text>
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

export default SignUp
