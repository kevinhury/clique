// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TitleSection from './TitleSection'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'
import BottomSection from './BottomSection'
import { defaultColors } from '../../themes/styles'

import type { Status, UserEvent } from '../../actions/types'

type EventCellProps = {
	event: UserEvent,
	onEditPress: () => void,
	onChatPress: () => void,
}

class EventCell extends Component {
	props: EventCellProps

	cellGradient(): Array<string> {
		const status: Status = this.props.event.status
		switch (status) {
			case 'Pending':
				return [defaultColors.primaryColor, '#fff']
			case 'Cancelled':
				return ['#999999', '#fff']
			case 'Cliqued':
				return [defaultColors.secondaryColor, '#fff']
		}
		return []
	}

	render() {
		const {
			title, owner, dates, approved, status, expires, invitees, isAdmin, minAtendees,
		} = this.props.event
		return (
			<LinearGradient
				colors={this.cellGradient()}
				style={styles.background}
			>
				<TitleSection
					status={status}
					approved={approved}
					isAdmin={isAdmin}
					onEditPress={() => this.props.onEditPress(this.props.event)}
				/>
				<View style={styles.container}>
					<TopSection title={title} owner={owner} date={dates[0]} />
					<View style={styles.separator} />
					<MiddleSection
						invitees={invitees}
						minAtendees={minAtendees || 0}
						bubblesToShow={3}
						onChatPress={this.props.onChatPress}
					/>
					<View style={styles.separator} />
					<BottomSection
						approved={approved}
						expires={expires}
						status={status}
					/>
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
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
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
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 10,
		marginRight: 10,
	},
})

export default EventCell
