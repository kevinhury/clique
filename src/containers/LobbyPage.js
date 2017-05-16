// @flow

import React, { Component } from 'react'
import { ListView, View, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { CommonCalendar } from '../components/Common'
import LinearGradient from 'react-native-linear-gradient'
import EventCell from '../components/EventCell'
import CardView from '../components/CardView'
import PlusButton from '../components/PlusButton'
import { requestEvents, selectEvent, createForm, modifyForm, createEvent, chatRoomWillEnter } from '../actions'

import type { UserEvent } from '../actions/types'

type LobbyPageProps = {
	navigation: any,
	pid: string,
	accessToken: string,
	loading: boolean,
	list: any,
	requestEvents: () => void,
	selectEvent: () => void,
	modifyForm: () => void,
	createForm: () => void,
	createEvent: (string, string) => void,
	chatRoomWillEnter: () => void,
}

class LobbyPage extends Component {
	dataSource: any
	props: LobbyPageProps
	static navigationOptions = () => ({
		title: I18n.t('navigation.eventsTitle'),
	})

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
				this.props.navigation.navigate('EventInfo')
			}}>
				<EventCell
					event={event}
					onEditPress={() => {
						this.props.modifyForm(event)
						this.props.navigation.navigate('CreateEvent')
					}}
					onChatPress={() => {
						this.props.chatRoomWillEnter(event.id, event.title)
						this.props.navigation.navigate('Chat', { title: event.title })
					}}
				/>
			</TouchableOpacity>
		)
	}

	renderCalendar() {
		return (
			<View>
				<CommonCalendar
					scrollEnabled
					events={[]}
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
						this.props.navigation.navigate('CreateEvent')
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
	createEvent,
	chatRoomWillEnter,
})(LobbyPage)
