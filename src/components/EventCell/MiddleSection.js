import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import AtendeeBubbles from './AtendeeBubbles'

const mock_images = [
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
  'https://facebook.github.io/react/img/logo_og.png',
]

class MiddleSection extends Component {
  static propTypes = {
    
  }

  render() {
    return (
      <View style={styles.middleSection}>
        <View style={styles.middleVerticalSection}>
          <Text>Going:</Text>
          <AtendeeBubbles images={mock_images} bubbles={2} />
          <Text>Chat</Text>
        </View>
        <Text>Minimum of 5 people</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  middleSection: {
  },
  middleVerticalSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default MiddleSection
