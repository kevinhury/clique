import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Text,
} from 'react-native'
import I18n from 'react-native-i18n'
import moment from 'moment'

import type { Status } from '../../reducers/EventsReducer'

class BottomSection extends Component {
	static propTypes = {
		status: PropTypes.string.isRequired, // type "Status"
		approved: PropTypes.string.isRequired, // type "Approval"
		expires: PropTypes.instanceOf(Date).isRequired,
	}

	statusText(): string {
		const status: Status = this.props.status
		var state: string
		switch (status) {
		case 'Pending':
			state = 'pending'
			break
		case 'Cancelled':
			state = 'cancelled'
			break
		case 'Cliqued':
			state = 'cliqued'
			break
		}
		return I18n.t(state)
	}

	expirationText() {
		const { expires, status } = this.props
		if (status === 'Cliqued') {
			return (<View />)
		}
		return (
			<Text>{I18n.t('inviteExpiresOn')}: {moment(expires).local().format('MMMM Do, H:MM')}</Text>
		)
	}

	render() {
		return (
			<View style={styles.bottomSection}>
				<Text>Event Status:{' '}
					<Text style={styles.statusText}>
						{this.statusText()}
					</Text>
				</Text>
				{this.expirationText()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	bottomSection: {
		alignItems: 'center',
	},
	statusText: {
		fontWeight: 'bold',
	}
})

export default BottomSection
