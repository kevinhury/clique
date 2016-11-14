import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'

class PhoneConfirmPage extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>
          We have sent you an SMS with a code to the number above.
        </Text>
        <Text style={styles.textStyle}>
          To complete your phone number verification, please enter the 6-digit activation code.
        </Text>
        <TextInput style={styles.inputStyle} />
        <View style={styles.buttonsView}>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>
              Resend Code
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonTextStyle}>
              Call Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    flex: 1,
    margin: 30,
  },
  inputStyle: {

  },
  buttonTextStyle: {
    color: '#007aff'
  },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flex: 5
  }
})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {})(PhoneConfirmPage)
