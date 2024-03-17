import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class ChatBox extends Component {
  render() {
    return (
      <View style={styles.chatbox}>
        <TextInput style={styles.text}
        placeholder="input text here"
        multiline
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    chatbox: {
        width: "70%",
        justifyContent: "center",
        backgroundColor: "lightgray",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "lightgray",
        alignContent: "center"
    },
    text: {
        padding: 5,
        lineHeight: 20,
    }


})
