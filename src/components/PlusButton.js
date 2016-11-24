import React, { Component } from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

type PlusButtonProps = {
    onPress: () => void,
}

class PlusButton extends Component {
  props: PlusButtonProps

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Text>+</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  }
})

export default PlusButton
