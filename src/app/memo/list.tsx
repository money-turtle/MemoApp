import { View, Text, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'


const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
            </View>
            <CircleButton>
                <Icon name="plus" size={40} color="red" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List