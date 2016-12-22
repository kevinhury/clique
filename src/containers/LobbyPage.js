// @flow

import React, { Component, PropTypes } from 'react'
import {
	ListView,
	View,
	StyleSheet,
	TouchableOpacity,
	Button,
	Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Calendar from 'react-native-calendar'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import EventCell from '../components/EventCell'
import CardView from '../components/CardView'
import Dialog from '../components/Dialogs/Dialog'

import type { Event, Invitee } from '../reducers/EventsReducer'

class LobbyPage extends Component {
	static propTypes = {
		events: PropTypes.array
	}

	componentWillMount(): void {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		this.dataSource = ds.cloneWithRows(this.props.events)
	}

	onEditPress(event: Event): void {
		console.log(event)
	}

	onChatPress(event: Event): void {
		console.log(event)
	}

	renderRow(event: Event) {
		return (
			<TouchableOpacity onPress={() => Actions.eventInfoPage({event})}>
				<EventCell
					event={event}
					onEditPress={this.onEditPress.bind(this)}
					onChatPress={this.onChatPress.bind(this)}
					/>
			</TouchableOpacity>
		)
	}

	renderCalendar() {
		return (
			<View>
				<Calendar
					scrollEnabled
					customStyle={{ calendarContainer: styles.calendar }}
					/>
				<View style={styles.separator} />
			</View>
		)
	}

	bla() {
		this.refs.dialog.modal().open()
	}

	render() {
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.container}
				>
				<CardView>
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderHeader={this.renderCalendar.bind(this)}
						renderRow={this.renderRow.bind(this)}
						/>
					<Icon
						type='ionicon'
						name='md-add'
						color='#01a836'
						raised
						reverse
						// onPress={() => Actions.createEvent()}
						onPress={this.bla.bind(this)}
						containerStyle={styles.plusButton}
						/>
				</CardView>
				<Dialog
					ref={'dialog'}
					title='You have declined this event'
					type={{ name: 'text', text: 'You can still change your RSVP status and attend this event just click below.' }}
					buttonText='CHANGE RSVP'
				/>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calendar: {
		backgroundColor: 'transparent',
	},
	plusButton: {
		position: 'absolute',
		bottom: 5,
		right: 5,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
	},
	separator: {
		backgroundColor: 'rgba(254, 193, 51, 0.5)',
		alignSelf: 'stretch',
		height: 1,
		margin: 5,
	}
})

const mapStateToProps = state => {
	const { events } = state
	return { events }
}

export default connect(mapStateToProps, {})(LobbyPage)
