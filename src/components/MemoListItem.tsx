import { View, Text, StyleSheet} from 'react-native'
interface Props {
    children: string
    memoListItemTitle: string
    memoListItemDate: string
}

const MemoListItem = (props: Props): JSX.Element => {
    const {children, memoListItemTitle, memoListItemDate} = props
    return(
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2024年11月7日 10:00</Text>
            </View>
            <View>
                <Text>X</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem
