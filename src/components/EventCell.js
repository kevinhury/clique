import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Switch,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.container}
			>
				<Switch value={going} style={styles.switch} />
				<View style={styles.topSection}>
					<View style={styles.topTitleSection}>
						<Text style={styles.titleText}>{title}</Text>
					</View>
					<Text style={styles.creatorText}>Created by {owner}</Text>
					<Text style={styles.dateText}>{date}</Text>
				</View>
				<View style={styles.separator} />
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
				<View style={styles.separator} />
				<View style={styles.bottomSection}>
					<Text>Invite expires on: {expires}</Text>
				</View>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		margin: 10,
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'transparent',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	topSection: {
		alignItems: 'center',
	},
	topTitleSection: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleText: {
		color: 'white',
		fontSize: 18,
	},
	creatorText: {
		color: 'white',
		fontSize: 12,
	},
	dateText: {
		color: 'white',
		fontSize: 16,
	},
	switch: {
		position: 'absolute',
		top: 4,
		right: 4,
	},
	middleSection: {
		alignItems: 'center',
	},
	middleVerticalSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	bottomSection: {
		alignItems: 'center',
	},
	separator: {
		backgroundColor: '#4BA4E1',
		alignSelf: 'stretch',
		height: 1,
		marginLeft: 10,
		marginRight: 10,
	}
})

export default EventCell
