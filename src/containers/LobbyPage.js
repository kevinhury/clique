// @flow

import React, { Component, PropTypes } from 'react'
import {
	ListView,
	View,
	StyleSheet,
	TouchableOpacity,
	RefreshControl,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Calendar from 'react-native-calendar'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import EventCell from '../components/EventCell'
import CardView from '../components/CardView'
import { requestEvents } from '../actions'

import type { Event } from '../reducers/EventsReducer'

class LobbyPage extends Component {
	dataSource: any
	static propTypes = {
		events: PropTypes.object,
		requestEvents: PropTypes.func,
	}

	componentWillMount(): void {
		this.updateDataSource(this.props)
		this.onRefresh()
	}

	componentWillReceiveProps(nextProps: any): void {
		this.updateDataSource(nextProps)
	}

	updateDataSource(props: any): void {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		})
		this.dataSource = ds.cloneWithRows(props.events.list)
	}

	onEditPress(event: Event): void {
		console.log(event)
	}

	onChatPress(event: Event): void {
		console.log(event)
	}

	onRefresh(): void {
		this.props.requestEvents()
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

	render() {
		console.log(`loading: ${this.props.events.loading}`)
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.container}
				>
				<CardView>
					<ListView
						refreshControl={
							<RefreshControl
								refreshing={this.props.events.loading}
								onRefresh={this.onRefresh.bind(this)}
							/>
						}
						enableEmptySections
						dataSource={this.dataSource}
						renderHeader={this.renderCalendar.bind(this)}
						renderRow={this.renderRow.bind(this)}
					/>
					<Icon
						type='ionicon'
						name='md-add'
						color='#F2AB2A'
						raised
						reverse
						onPress={() => Actions.createEvent()}
						containerStyle={styles.plusButton}
						/>
				</CardView>
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
	},
	indicator: {
		alignSelf: 'center',
		justifyContent: 'center',
	},
})

const mapStateToProps = state => {
	const { events } = state
	return { events }
}

export default connect(mapStateToProps, {
	requestEvents,
})(LobbyPage)
