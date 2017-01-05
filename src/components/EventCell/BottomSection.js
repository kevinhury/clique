import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Text,
} from 'react-native'

import type { Status } from '../../reducers/EventsReducer'

class BottomSection extends Component {
	static propTypes = {
		status: PropTypes.string.isRequired, // type "Status"
		approved: PropTypes.string.isRequired, // type "Approval"
		expires: PropTypes.instanceOf(Date).isRequired,
	}

	statusText(): string {
		const status: Status = this.props.status
		switch (status) {
		case 'Pending':
			return 'Pending'
		case 'Cancelled':
			return 'Cancelled'
		case 'Cliqued':
			return 'Cliqued'
		}
	}

	expirationText() {
		if (this.props.status === 'Cliqued') {
			return (<View />)
		}
		return (
			<Text>Invite expires on: {this.props.expires.toString()}</Text>
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
