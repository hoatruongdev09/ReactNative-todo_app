/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import InputView from './components/inputView'
import HeaderView from './components/headerView'
import TodoView from './components/todoView'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [{ id: 0, content: "todo1", done: false },
      { id: 1, content: "todo1", done: false },
      { id: 2, content: "todo1", done: false },
      { id: 3, content: "todo1", done: false },]
    }
  }
  onCreateTodo(content) {
    let todos = this.state.todos
    let id = this.state.todos.length;
    console.log("state.todos: ", this.state.todos, " todo: ", todos)
    todos.unshift({
      id: id,
      content: content,
      done: false
    })
    this.setState({ todos: todos })
    console.log("state.todos: ", this.state.todos)
  }
  deleteTodoTask(index) {
    let todos = this.state.todos
    for (let i = 0; i < todos.length; i++) {
      if (i == index) {
        todos.splice(i, 1)
        break
      }
    }
    this.setState({ todos: todos })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <HeaderView></HeaderView>
        </View>
        <View style={styles.inputView}>
          <InputView onAddTodo={(text) => this.onCreateTodo(text)}></InputView>
        </View>
        <View style={styles.todoView}>
          <TodoView todos={this.state.todos} deleteTodoTask={(index) => this.deleteTodoTask(index)}></TodoView>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 50
  },
  inputView: {
    backgroundColor: "#f1c40f",
    height: 45
  },
  todoView: {
    flex: 1
  }
})
export default App;
