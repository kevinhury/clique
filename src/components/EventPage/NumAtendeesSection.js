// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'

type NumAtendeesSectionProps = {
	style: any,
	limitedRSVP: number,
	minAtendees: number,
}

const minAtendeesText = (minAtendees: number) => {
	if (minAtendees == 0)
		return (<Text>{I18n.t('notLimited')}</Text>)
	return (
		<Text style={styles.greenText}>{minAtendees}</Text>
	)
}

const maxAtendeesText = (limitedRSVP: number) => {
	if (limitedRSVP == 0)
		return (<Text>{I18n.t('notLimited')}</Text>)
	return (
		<Text style={styles.greenText}>{limitedRSVP} / {limitedRSVP}</Text>
	)
}

const NumAtendeesSection = (props: NumAtendeesSectionProps) =>
	<View style={props.style}>
		<Text>{I18n.t('minRSVPs')}: {minAtendeesText(props.minAtendees)}</Text>
		<Text>{I18n.t('maxRSVPs')}: {maxAtendeesText(props.limitedRSVP)}</Text>
	</View>

const styles = StyleSheet.create({
	greenText: {
		color: '#01a836',
		fontWeight: 'bold',
	},
})

export { NumAtendeesSection }