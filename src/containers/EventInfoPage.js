import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class EventInfoPage extends Component {
  render() {
    return (
      <View>
        <Text>hellllllo</Text>
      </View>
    )
  }
}

export default connect(null, {})(EventInfoPage)
