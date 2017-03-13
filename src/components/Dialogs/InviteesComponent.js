// @flow

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'
import { AtendeeBubbles } from '../Common'
import I18n from 'react-native-i18n'
import type { Invitee } from '../../actions/types'

type Props = {
	invitees: Invitee[],
}

class InviteesComponent extends Component {
	props: Props

	render() {
		const invitees = this.props.invitees
		const bubblesToShow = 3
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{I18n.t('going')}:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.filter(x => x.approved === 'Approved').map(x => x.image)}
					bubblesToShow={bubblesToShow}
				/>
				<Text style={styles.text}>{I18n.t('pending')}:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.filter(x => x.approved === 'Pending').map(x => x.image)}
					bubblesToShow={bubblesToShow}
				/>
				<Text style={styles.text}>{I18n.t('notGoing')}:</Text>
				<AtendeeBubbles
					style={styles.bubbles}
					images={invitees.filter(x => x.approved === 'Declined').map(x => x.image)}
					bubblesToShow={bubblesToShow}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		margin: 5,
		paddingLeft: 20,
		flex: 1,
		alignSelf: 'stretch',
	},
	text: {
		color: '#000',
	},
	bubbles: {
		paddingLeft: 10,
		marginBottom: 10,
	},
})

export default InviteesComponent
