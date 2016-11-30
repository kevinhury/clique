import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

class BottomSection extends Component {
  static propTypes = {
    going: PropTypes.bool.isRequired,
    expires: PropTypes.string.isRequired,
  }

  statusText(): string {
    return this.props.going ? 'Happening' : 'Pending'
  }

  render() {
    const { expires } = this.props
    return (
      <View style={styles.bottomSection}>
        <Text>Event Status:{' '}
          <Text style={styles.statusText}>
            {this.statusText()}
          </Text>
        </Text>
        <Text>Invite expires on: {expires}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomSection: {
    alignItems: 'center',
  },
  statusText: {
    fontWeight: 'bold',
  }
})

export default BottomSection
