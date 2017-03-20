// @flow

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type InfoSectionProps = {
	date: string,
	time: string,
	location: string,
	onLocationPress: () => void,
}

class InfoSection extends Component {
	props: InfoSectionProps

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
					<TouchableOpacity
						onPress={this.props.onLocationPress}
					>
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
		color: '#50A5F9',
	},
})

export { InfoSection }
