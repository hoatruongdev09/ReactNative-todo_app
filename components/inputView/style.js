import React from 'react'
import {
    StyleSheet
} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1c40f",
        flexDirection: "row"
    },
    textInput: {
        flex: .7,
        fontSize: 18,
        fontWeight: '200'
    },
    buttonAdd: {
        flex: .3,
        backgroundColor: "#1abc9c",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonAddText: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default style