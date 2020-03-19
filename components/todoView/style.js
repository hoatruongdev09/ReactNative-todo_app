import {
    StyleSheet
} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ecf0f1"
    },
    listView: {
        flex: 1,
        alignSelf: 'stretch',
    },
    listItemViewOdd: {
        height: 45,
        backgroundColor: "#bdc3c7",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    listItemViewEven: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    listItemViewText: {
        fontWeight: 'normal',
        fontSize: 18,
        marginLeft: 10,
        flex: .8
    },
    listItemViewButtonDelete: {
        flex: .2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: "#7f8c8d",
        borderLeftWidth: 2,
    },
    deleteButtonText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default style