// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AddressBarItem } from '../Common'

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
				<AddressBarItem onPress={this.props.onLocationPress} text={location} />
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
})

export { InfoSection }
