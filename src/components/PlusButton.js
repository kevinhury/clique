import React, { Component } from 'react'
import {
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native'
import images from '../themes/Images'

type PlusButtonProps = {
    onPress: () => void,
}

class PlusButton extends Component {
  props: PlusButtonProps

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Image
          source={images.addButton}
          style={styles.image}
          underlayColor='#ff0000'
        />
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
