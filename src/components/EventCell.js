import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
	EventCellTitleSection,
	EventCellTopSection,
	EventCellMiddleSection,
	EventCellBottomSection,
} from './EventCellComponents'

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
				style={styles.background}
			>
				<EventCellTitleSection going={going} />
				<View style={styles.container}>
					<EventCellTopSection title={title} owner={owner} date={date} />
					<View style={styles.separator} />
					<EventCellMiddleSection />
					<View style={styles.separator} />
					<EventCellBottomSection expires={expires} />
				</View>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		borderRadius: 5,
		margin: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'transparent',
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
