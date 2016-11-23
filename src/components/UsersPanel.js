import React, { Component, PropTypes } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'

class UsersPanel extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})

export default UsersPanel
