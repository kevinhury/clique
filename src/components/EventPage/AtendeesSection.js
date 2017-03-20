// @flow

import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import { AtendeeBubbles, ChatButton } from '../Common'

type EventAtendeesSectionProps = {
	invitees: any,
	style: any,
	createFlow: boolean,
	onPress: () => void,
}

const renderChatButton = (createFlow) => {
	if (createFlow)
		return <View />
	else
		return (
			<ChatButton
				title={I18n.t('chat')}
				onPress={() => console.log('press')}
			/>
		)
}

const AtendeesSection = (props: EventAtendeesSectionProps) =>
	<View style={props.style}>
		<Text>{I18n.t('peopleGoing')}:</Text>
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={styles.goingSection}>
				<AtendeeBubbles images={props.invitees.map(x => x.image)} bubblesToShow={2} />
				{renderChatButton(props.createFlow)}
			</View>
		</TouchableWithoutFeedback>
	</View>


const styles = StyleSheet.create({
	goingSection: {
		marginTop: 10,
		paddingLeft: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})

export { AtendeesSection }