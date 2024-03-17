import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ProfilePicture extends Component {
  render() {
    return (
      <View style={styles.pic}>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    pic: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "lightgray",
    },
    
})
