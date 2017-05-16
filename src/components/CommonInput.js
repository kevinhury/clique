// @flow

import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type CommonInputProps = {
	placeholder: string,
	onChangeText: (string) => void,
	value: string,
	style?: any,
	focus?: boolean,
}

class CommonInput extends React.Component {
	props: CommonInputProps

	focus() {
		this.refs.input.focus()
	}

	componentWillReceiveProps(nextProps: CommonInputProps) {
		if (nextProps.focus) this.focus()
	}

	render() {
		const props = this.props
		const borderColor = props.value.length > 0 ? styles.highlighted : styles.normal
		return (
			<TextInput
				{...props}
				ref='input'
				placeholder={props.placeholder}
				onChangeText={props.onChangeText}
				value={props.value}
				style={[styles.inputStyle, borderColor, props.style]}
				underlineColorAndroid={'transparent'}
			/>
		)
	}
}

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		borderRadius: 20,
		borderWidth: 1,
		height: 40,
		margin: 8,
	},
	highlighted: {
		borderColor: '#31A5FD',
	},
	normal: {
		borderColor: '#BFBFBF',
	},
})

export default CommonInput