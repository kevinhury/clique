import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { AtendeeBubbles, ChatButton } from '../Common'

class MiddleSection extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    minAtendees: PropTypes.number.isRequired,
    bubblesToShow: PropTypes.number.isRequired,
  }

  render() {
    const { images, bubblesToShow, minAtendees } = this.props
    return (
      <View style={styles.middleSection}>
        <View style={styles.middleVerticalSection}>
          <Text>Going:</Text>
          <AtendeeBubbles images={images} bubbles={bubblesToShow} />
          <ChatButton
            onPress={() => console.log('press')}
          />
        </View>
        <Text style={styles.minText}>Minimum of {minAtendees} people</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  minText: {
    color: '#01a836',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
})

export default MiddleSection
