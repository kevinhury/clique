import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

class PhoneLoginPage extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Please confirm your country code and enter your phone number</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default connect(null, {})(PhoneLoginPage)
