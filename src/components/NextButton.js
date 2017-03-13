import React from 'react'
import { StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import { Button } from 'react-native-elements'

type NextButtonProps = {
	onPress: () => void,
}

const NextButton = (props: NextButtonProps) =>
	<Button
		large
		raised
		onPress={props.onPress}
		title={I18n.t('next')}
		backgroundColor='#01a836'
		buttonStyle={styles.nextButton}
	/>

const styles = StyleSheet.create({
	nextButton: {
		height: 50,
		borderRadius: 15,
	},
})

export default NextButton
