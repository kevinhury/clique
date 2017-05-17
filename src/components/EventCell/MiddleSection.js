// @flow

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { AtendeeBubbles, ChatButton } from '../Common'
import I18n from 'react-native-i18n'
import { defaultColors } from '../../themes/styles'
import type { Invitee } from '../../actions/types'

type MiddleSectionProps = {
	invitees: Invitee[],
	minAtendees: number,
	bubblesToShow: number,
	onChatPress: () => void,
}

class MiddleSection extends Component {
	props: MiddleSectionProps

	renderBubbles() {
		const { invitees, bubblesToShow, onChatPress } = this.props
		if (invitees.length == 0)
			return (
				<View style={styles.noRSVPs}>
					<Text>{I18n.t('no_rsvp')}</Text>
				</View>
			)
		return (
			<View style={styles.middleVerticalSection}>
				<Text>{I18n.t('going')}:</Text>
				<AtendeeBubbles
					images={invitees.map(x => x.image)}
					bubblesToShow={bubblesToShow}
				/>
				<ChatButton
					title={I18n.t('chat')}
					onPress={onChatPress}
				/>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.middleSection}>
				{this.renderBubbles()}
				<Text style={styles.minText}>{I18n.t('min_people', { number: this.props.minAtendees })}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	middleSection: {
	},
	middleVerticalSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 6,
	},
	minText: {
		color: defaultColors.secondaryColor,
		fontSize: 12,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	noRSVPs: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default MiddleSection
