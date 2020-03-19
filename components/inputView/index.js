import React, { Component } from 'react'

import {
    View,
    TextInput,
    Text,
    TouchableHighlight
} from 'react-native'

import styles from './style'

export default class InputView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputContent: ""
        }
    }
    changeStateContent(text) {
        this.state = {
            inputContent: text
        }
    }
    onAddTodo() {
        let content = this.state.inputContent
        this.state = {
            inputContent: ""
        }
        this.props.onAddTodo(content)
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} onChangeText={(text) => this.changeStateContent(text)}></TextInput>
                <TouchableHighlight style={styles.buttonAdd} onPress={() => this.onAddTodo()}>
                    <View>
                        <Text style={styles.buttonAddText}>ADD</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
