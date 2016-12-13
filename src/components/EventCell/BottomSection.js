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
		approved: PropTypes.bool.isRequired,
		expires: PropTypes.string.isRequired,
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

	render() {
		const { expires } = this.props
		return (
			<View style={styles.bottomSection}>
				<Text>Event Status:{' '}
					<Text style={styles.statusText}>
						{this.statusText()}
					</Text>
				</Text>
				<Text>Invite expires on: {expires}</Text>
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
