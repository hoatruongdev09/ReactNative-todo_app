import React, { Component } from 'react'

import {
    View,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native'

import styles from './style'

export default class TodoView extends Component {
    constructor(props) {
        super(props)

    }
    createNewDatalist(arr) {
        let dataMap = arr.map((item) => this.createDataChild(arr.indexOf(item), item))
        return dataMap
    }
    createDataChild(index, item) {
        return {
            index: index,
            item: item
        }
    }
    deleteTask(index) {
        this.props.deleteTodoTask(index)
    }
    createListItem(item, index) {
        return (
            <View style={item.index % 2 == 0 ? styles.listItemViewOdd : styles.listItemViewEven}>
                <Text style={styles.listItemViewText}>{item.item.item.content}</Text>
                <TouchableHighlight style={styles.listItemViewButtonDelete} onPress={() => { this.deleteTask(item.index) }}>
                    <Text style={styles.deleteButtonText}>Remove</Text>
                </TouchableHighlight>
            </View >
        )
    }
    render() {
        let data = this.createNewDatalist(this.props.todos)
        console.log("data: ", data)
        return (
            <View style={styles.container}>
                <FlatList style={styles.listView} data={data}
                    renderItem={(item, index) => this.createListItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                ></FlatList>
            </View>
        )
    }
}
