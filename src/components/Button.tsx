import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
    label: string,
    onPress?: () => void //何も返さない関数として型を定義
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: '#467FD3',
            borderRadius: 4,
            alignSelf: 'flex-start', //flexbox自体の並び方をコントローする（子要素はalignitemsとjustifycontensでコントロール）
            marginBottom: 24
        },
        buttonLabel: {
            fontSize: 16,
            lineHeight: 32,
            color: '#ffffff',
            paddingVertical: 8,
            paddingHorizontal: 24
        }    
    }
)

export default Button