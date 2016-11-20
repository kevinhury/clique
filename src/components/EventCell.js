import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Switch,
} from 'react-native'

const info = {
	title: 'FIFA 17 SESSION',
	owner: 'Yossi K',
	date: '14th Wed, December 13:30',
	going: true,
	expires: '8th Tue, November 19:00',
	atendees: [],
}

class EventCell extends Component {
	render() {
		const { title, owner, date, going, expires, atendees } = info
		return (
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View style={styles.topTitleSection}>
						<Text>{title}</Text>
						<Switch value={going}/>
					</View>
					<Text>Created by {owner}</Text>
					<Text>{date}</Text>
				</View>
				<View style={styles.middleSection}>
					<View style={styles.middleVerticalSection}>
							<Text>Going:
								<Text>First 30 people</Text>
							</Text>

						<Text>Icons</Text>
						<Text>Chat</Text>
					</View>
					<Text>Minimum of 5 people</Text>
				</View>
				<View style={styles.bottomSection}>
					<Text>Invite expires on: {expires}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 10,
		backgroundColor: 'blue',
	},
	topSection: {
		alignItems: 'center',
	},
	topTitleSection: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	middleSection: {
		alignItems: 'center',
	},
	middleVerticalSection: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	bottomSection: {
		alignItems: 'center',
	},
})

export default EventCell
