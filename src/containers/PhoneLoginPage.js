import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'

class PhoneLoginPage extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textStyle}>
          Please confirm your country code and enter your phone number
        </Text>
        <TouchableHighlight>
          <Text>
            United States
          </Text>
        </TouchableHighlight>
        <View style={styles.verticalStyle}>
          <Text>+1</Text>
          <TextInput
            style={styles.inputStyle}
            keyboardType={'phone-pad'}
            placeholder='your phone number'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  textStyle: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 65,
  },
  verticalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 6
  },
})

export default connect(null, {})(PhoneLoginPage)
