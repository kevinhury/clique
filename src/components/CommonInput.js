import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type CommonInputProps = {
	placeholder: string,
	onChangeText: (string) => void,
	value: string,
	style: ?any,
}

const CommonInput = (props: CommonInputProps) =>
	<TextInput
		placeholder={props.placeholder}
		onChangeText={props.onChangeText}
		value={props.value}
		style={[styles.inputStyle, props.style]}
		multiline
	/>

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#31A5FD',
		height: 40,
		margin: 8,
	},
})

export default CommonInput