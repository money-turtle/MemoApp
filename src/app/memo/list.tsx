import { View, StyleSheet} from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const navigation = useNavigation()//expo-routerによって提供されているhook。reactコンポーネントの直下に置かないといけない。関数内はNG。
    useEffect(() => {//下記の関数が1度だけ描画するようにする。//このコンポーネントは関係ないとこに影響を与える。
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })    
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
                <MemoListItem memoListItemTitle="買い物リスト" memoListItemDate="2024年11月7日 10:00">x</MemoListItem>
            </View>
            <CircleButton onPress={handlePress}>
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