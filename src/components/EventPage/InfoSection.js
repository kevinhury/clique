// @flow

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class InfoSection extends Component {
	static propTypes = {
		date: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
	}

	render() {
		const { date, time, location } = this.props
		return (
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Icon name='ios-calendar-outline' size={20} style={styles.icon} />
          <Text>{date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name='ios-clock-outline' size={20} style={styles.icon} />
          <Text>{time}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name='ios-pin-outline' size={20} style={styles.icon} />
          <TouchableOpacity>
            <Text style={styles.locationText}>{location}</Text>
          </TouchableOpacity>
        </View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
	infoSection: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	infoRow: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	icon: {
		margin: 2,
		marginRight: 8,
	},
	locationText: {
		textDecorationLine: 'underline',
		color: '#50A5F9'
	}
})

export default InfoSection
