import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserBoxAndPic from '../component/UserBoxAndPic';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
      </View>
      <View style={styles.chatBox}>
      <UserBoxAndPic/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chatBox: {
    width: "80%",
    flex: 1,
    borderWidth: 1,
    justifyContent: "center"

  },
  inputBox: {
    width: "80%",
    flex: 4,
    borderWidth: 1,
  }
});

export default Home;