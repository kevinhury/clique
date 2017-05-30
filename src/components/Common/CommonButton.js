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
		borderRadius={25}
		disabled={disabled || false}
		onPress={onPress}
		title={title}
		backgroundColor={backgroundColor || defaultColors.secondaryColor}
		buttonStyle={[styles.button, style]}
		containerViewStyle={styles.container}
	/>

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
	},
	button: {
		height: 50,
	},
})

export { CommonButton }
