// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import I18n from 'react-native-i18n'
import type { Status, Approval } from '../../actions/types'

type TitleSectionProps = {
	approved: Approval,
	status: Status,
	isAdmin: boolean,
	onEditPress: () => void,
}

class TitleSection extends Component {
	props: TitleSectionProps

	titleText(): string {
		const status: Status = this.props.status
		const approved: Approval = this.props.approved
		var state: string
		if (status === 'Pending' && approved === 'Approved')
			state = 'cell.userRSVPd'
		else if (approved === 'Approved')
			state = 'cell.userGoing'
		else if (approved === 'Declined')
			state = 'cell.userDeclined'
		else
			state = 'cell.userNotApproved'

		return I18n.t(state)
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
			<View style={[styles.content, { justifyContent: 'space-between' }]}>
				<Text style={styles.titleText}>{this.titleText()}</Text>
				<TouchableOpacity onPress={this.props.onEditPress}>
					<View style={styles.editButton}>
						<Text style={styles.titleText}>{I18n.t('edit')}</Text>
						<Icon size={12} name='border-color' color='#fff' style={styles.editIcon} />
					</View>
				</TouchableOpacity>
			</View>
		)
	}

	inviteeState() {
		return (
			<View style={[styles.content, { justifyContent: 'flex-end' }]}>
				<Text style={styles.titleText}>{this.titleText()}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={[styles.titleSection, this.sectionColor()]}>
				{this.props.isAdmin ? this.adminState() : this.inviteeState()}
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
		color: '#fff',
	},
	editButton: {
		margin: 2,
		flexDirection: 'row',
		alignItems: 'center',
	},
	editIcon: {
		marginLeft: 5,
	},
})

export default TitleSection
