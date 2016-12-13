import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Text,
	Switch,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import type { Status, Approval } from '../../reducers/EventsReducer'

class TitleSection extends Component {
	static propTypes = {
		approved: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
		isAdmin: PropTypes.bool.isRequired,
		onEditPress: PropTypes.func.isRequired,
	}

	titleText(): string {
		const status: Status = this.props.status
		const approved: Approval = this.props.approved
		if (status === 'Pending' && approved === 'Approved')
			return 'RSVP\'d'
		else if (approved === 'Approved')
			return 'You\'re going!'
		else if (approved === 'Declined')
			return 'Declined'
		else
			return 'Are you coming?'
	}

	sectionColor() {
		var backgroundColor: string
		switch (this.props.approved) {
		case 'Approved':
			backgroundColor = '#01a836'
			break
		case 'Pending':
			backgroundColor = '#3c9bfd'
			break
		case 'Declined':
			backgroundColor = '#999'
			break
		}
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
