// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { defaultColors } from '../../themes/styles'

type CommonButtonProps = {
	title: string,
	backgroundColor: ?string,
	disabled: ?boolean,
	onPress: () => void,
	style: ?any,
}

const CommonButton = ({ backgroundColor, title, disabled, onPress, style }: CommonButtonProps) =>
	<Button
		large
		raised
		disabled={disabled || false}
		onPress={onPress}
		title={title}
		backgroundColor={backgroundColor || defaultColors.secondaryColor}
		buttonStyle={[styles.button, style]}
	/>

const styles = StyleSheet.create({
	button: {
		height: 50,
		borderRadius: 25,
	},
})

export { CommonButton }
