import { View, StyleSheet, FlatList} from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import LogOutButton from '../../components/LogOutButton'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([]) //<>はtypescriptの型の定義方法
    const navigation = useNavigation()//expo-routerによって提供されているhook。reactコンポーネントの直下に置かないといけない。関数内はNG。
    useEffect(() => {//下記の関数が1度だけ描画するようにする。//このコンポーネントは関係ないとこに影響を与える。
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })    
    }, [])

    useEffect(() => {//fireストアを使ってリアルタイムにmemoオブジェクトを監視できる。画面が表示された時に一度だけ実行される処理。画面が消える時にも実行できるようにできる。
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {//onsubscribeを返してくれる。
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText: bodyText,//省略
                    updatedAt: updatedAt//省略
                })
                console.log('memo', doc.data())
            })
            setMemos(remoteMemos)
        })
        return unsubscribe //監視をキャンセルしてくれる。画面が消えるとき。useEffectの応用。
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item}/> } //returnと{}を省略できる
            />
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