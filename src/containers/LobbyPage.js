// @flow

import React, { Component } from 'react'
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
import LinearGradient from 'react-native-linear-gradient'
import EventCell from '../components/EventCell'
import CardView from '../components/CardView'
import PlusButton from '../components/PlusButton'
import { requestEvents, selectEvent, createForm, modifyForm } from '../actions'

import type { UserEvent } from '../actions/types'

type LobbyPageProps = {
	pid: string,
	accessToken: string,
	loading: boolean,
	list: any,
	requestEvents: () => void,
	selectEvent: () => void,
	modifyForm: () => void,
	createForm: () => void,
}

class LobbyPage extends Component {
	dataSource: any
	props: LobbyPageProps

	componentWillMount(): void {
		this.updateDataSource(this.props)
		this.onRefresh()
	}

	componentWillReceiveProps(nextProps: LobbyPageProps): void {
		this.updateDataSource(nextProps)
	}

	updateDataSource(props: LobbyPageProps): void {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		})
		this.dataSource = ds.cloneWithRows(props.list)
	}

	onRefresh(): void {
		this.props.requestEvents(this.props.pid, this.props.accessToken)
	}

	renderRow(event: UserEvent) {
		return (
			<TouchableOpacity onPress={() => {
				this.props.selectEvent(event)
				Actions.eventInfoPage()
			}}>
				<EventCell
					event={event}
					onEditPress={() => {
						this.props.modifyForm(event)
						Actions.createEvent()
					}}
					onChatPress={() => { }}
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
		return (
			<LinearGradient
				colors={['#31A5FD', '#ffffff']}
				style={styles.container}
			>
				<CardView>
					<ListView
						refreshControl={
							<RefreshControl
								refreshing={this.props.loading}
								onRefresh={this.onRefresh.bind(this)}
							/>
						}
						enableEmptySections
						dataSource={this.dataSource}
						renderHeader={this.renderCalendar.bind(this)}
						renderRow={this.renderRow.bind(this)}
					/>
					<PlusButton onPress={() => {
						this.props.createForm()
						Actions.createEvent()
					}} />
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
	const { events, session } = state
	return { ...events, pid: session.pid, accessToken: session.accessToken }
}

export default connect(mapStateToProps, {
	createForm,
	modifyForm,
	requestEvents,
	selectEvent,
})(LobbyPage)
