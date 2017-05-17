// @flow

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
import { defaultColors } from '../../themes/styles'
import type { Approval, Status } from '../../actions/types'

type TitleSectionProps = {
	renderCancel: boolean,
	title: string,
	creator: string,
	image: string,
	approved: Approval,
	status: Status,
	onStatusPress: () => void,
	onCancelPress: () => void,
}

class TitleSection extends Component {
	props: TitleSectionProps

	eventStatus(status: string): string {
		var state: string
		if (status === 'Pending')
			state = 'pending'
		else if (status === 'Cancelled')
			state = 'cancelled'
		else if (status === 'Cliqued')
			state = 'cliqued'
		return I18n.t(state)
	}

	userStatus(approved: string, status: string): string {
		var state: string
		if (approved === 'Approved' && status === 'Cliqued')
			state = 'going'
		else if (approved === 'Approved')
			state = 'cell.userRSVPd'
		else if (approved === 'Pending')
			state = 'pending'
		else
			state = 'cell.userDeclined'
		return I18n.t(state)
	}

	renderCancelButton(renderCancel: boolean) {
		if (!renderCancel) {
			return (<View />)
		}
		return (
			<Button
				title={I18n.t('cancel')}
				raised
				buttonStyle={styles.button}
				backgroundColor='#b04549'
				onPress={this.props.onCancelPress}
			/>
		)
	}

	render() {
		const { title, creator, image, approved, status, renderCancel } = this.props
		return (
			<View style={styles.titleSection}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.creatorText}>{I18n.t('by')} {creator}</Text>
				<View style={styles.buttonContainer}>
					{this.renderCancelButton(renderCancel)}
					<Image
						source={{ uri: image }}
						style={styles.image}
					/>
					<Button
						title={this.userStatus(approved, status)}
						raised
						buttonStyle={styles.button}
						backgroundColor={approved === 'Declined' ? '#999' : defaultColors.secondaryColor}
						onPress={this.props.onStatusPress}
					/>
				</View>
				<Text style={styles.eventStatus}>
					{I18n.t('eventStatus')}: {' '}
					<Text style={[styles.eventStatus, { fontWeight: 'bold' }]}>
						{this.eventStatus(status)}
					</Text>
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	titleSection: {
		backgroundColor: '#222222',
		borderWidth: 1,
		borderColor: 'white',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		alignItems: 'center',
		padding: 5,
	},
	titleText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	creatorText: {
		color: 'white',
		marginBottom: 5,
		fontSize: 12,
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		borderRadius: 30,
		borderColor: '#fff',
		borderWidth: 1,
		height: 35,
		width: 115,
	},
	image: {
		width: 45,
		height: 45,
		borderRadius: 22,
		borderColor: '#fff',
		borderWidth: 1,
		alignSelf: 'center',
	},
	eventStatus: {
		color: 'white',
		marginTop: 5,
	},
})

export { TitleSection }
