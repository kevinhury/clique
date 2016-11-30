import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Switch
} from 'react-native'

class TitleSection extends Component {
  static propTypes = {
    going: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>Are you coming?</Text>
        <Switch value={this.props.going} style={styles.switch} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleSection: {
		backgroundColor: '#3C9BFD',
		flexDirection: 'row',
		justifyContent: 'flex-end',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
		alignItems: 'center',
    padding: 2,
	},
  titleText: {
    color: '#fff'
  },
  switch: {
    marginLeft: 5,
  },
})

export default TitleSection
