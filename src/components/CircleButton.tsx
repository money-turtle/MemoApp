import { 
    View, Text, StyleSheet, type ViewStyle, TouchableOpacity 
} from 'react-native'

interface Props {
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void

}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',//子要素を中央に持ってくるための設定
        alignItems: 'center',
        position: 'absolute',//サークルボタンを右下に固定
        right: 40,
        bottom: 40,
        //shadowプロパティはiOSにしか適用できない
        shadowColor: '#000000',
        shadowOpacity: 0.25,//透明度
        shadowRadius: 8,//どれだけぼかすか
        shadowOffset: { width: 0, height: 8},//影の位置を下にズラす
        //AndoroidはelevationはGoogleが提供するマテリアルというデザインシステムが提供しているもの
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48

    }
})

export default CircleButton
