
import React, { Component } from 'react'
import {
  Text, View, StyleSheet, Image, TouchableWithoutFeedback, StatusBar,
  TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="username" />


          <TextInput style={styles.input} placeholder="password" />

        </View>
      </SafeAreaView>

    )
  }
}



const styles = StyleSheet.create({
  container: {

  },
  input: {
    height: 40,
    backgroundColor: 'gray',
    marginBottom: 20
  }
});