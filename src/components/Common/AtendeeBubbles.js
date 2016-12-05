import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import UserBubble from './UserBubble'

class AtendeeBubbles extends Component {
  static propTypes = {
    images: PropTypes.array,
    bubbles: PropTypes.number,
  }

  renderBubble(uri) {
    return (
      <UserBubble
        style={styles.bubble}
        image={{ uri }}
      />
    )
  }

  renderMoreBubble() {
    const { images, bubbles } = this.props
    if (images.length - bubbles <= 0) {
      return (<View />)
    }
    return (
      <View style={styles.moreBubble}>
        <Text style={styles.text}>+{this.props.bubbles}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBubble(this.props.images[0])}
        {this.renderBubble(this.props.images[1])}
        {this.renderMoreBubble()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: -20,
  },
  bubble: {
    width: 30,
    height: 30,
  },
  moreBubble: {
    backgroundColor: '#000',
    width: 20,
    height: 20,
    borderRadius: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 1,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 10,
  }
})

export { AtendeeBubbles }
