import React, { PropTypes } from 'react'
import {
  StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'

const ChatButton = ({ onPress }) => (
  <Button
    small
    icon={{ name: 'md-chatboxes', type: 'ionicon' }}
    title='Chat'
    iconRight
    backgroundColor='#31A5FD'
    onPress={onPress}
    buttonStyle={styles.chatButton}
  />
)
ChatButton.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  chatButton: {
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
})

export { ChatButton }
