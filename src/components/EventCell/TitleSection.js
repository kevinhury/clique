import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Text,
	Switch,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import type { Status } from '../../reducers/EventsReducer'

class TitleSection extends Component {
	static propTypes = {
		approved: PropTypes.bool.isRequired,
		status: PropTypes.string.isRequired,
		isAdmin: PropTypes.bool.isRequired,
		onEditPress: PropTypes.func.isRequired,
	}

	titleText(): string {
		const status: Status = this.props.status
		const approved: boolean = this.props.approved
		if (status === 'Pending' && approved)
			return 'RSVP\'d'
		else if (approved)
			return 'You\'re going!'
		else
			return 'Are you coming?'
	}

	sectionColor() {
		const backgroundColor = this.props.approved ? '#01a836' : '#3C9BFD'
		return { backgroundColor }
	}

	adminState() {
		return (
			<View style={[styles.content, {justifyContent: 'space-between'}]}>
				<Text style={styles.titleText}>{this.titleText()}</Text>
				<TouchableOpacity onPress={this.props.onEditPress}>
					<View style={styles.editButton}>
						<Text style={styles.titleText}>Edit</Text>
						<Icon size={12} name='border-color' color='#fff' style={styles.editIcon} />
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	inviteeState() {
		return (
			<View style={[styles.content, {justifyContent: 'flex-end'}]}>
				<Text style={styles.titleText}>{this.titleText()}</Text>
				<Switch value={this.props.approved} style={styles.switch} />
			</View>
		)
	}

	render() {
		return (
			<View style={[styles.titleSection, this.sectionColor()]}>
				{ this.props.isAdmin ? this.adminState() : this.inviteeState() }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	titleSection: {
		flex: 1,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		padding: 2,
	},
	content: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleText: {
		color: '#fff'
	},
	switch: {
		marginLeft: 5,
	},
	editButton: {
		margin: 2,
		flexDirection: 'row',
		alignItems: 'center',
	},
	editIcon: {
		marginLeft: 5,
	}
})

export default TitleSection
