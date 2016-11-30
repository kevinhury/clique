import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

class BottomSection extends Component {
  static propTypes = {
    expires: PropTypes.string.isRequired,
  }

  render() {
    const { expires } = this.props
    return (
      <View style={styles.bottomSection}>
        <Text>Invite expires on: {expires}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomSection: {
    alignItems: 'center',
  },
})

export default BottomSection
