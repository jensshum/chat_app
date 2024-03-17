import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ProfilePicture from './ProfilePicture'
import ChatBox from './ChatBox'

export default class UserBoxAndPic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfilePicture/>
        <ChatBox/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})
