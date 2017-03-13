import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Text,
} from 'react-native'
import { AtendeeBubbles, ChatButton } from '../Common'
import I18n from 'react-native-i18n'

class MiddleSection extends Component {
	static propTypes = {
		invitees: PropTypes.array.isRequired,
		minAtendees: PropTypes.number.isRequired,
		bubblesToShow: PropTypes.number.isRequired,
	}

	renderBubbles() {
		const { invitees, bubblesToShow } = this.props
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
					onPress={() => console.log('press')}
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
		color: '#01a836',
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
