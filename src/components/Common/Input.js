import React, { Component, PropTypes } from 'react'
import { TextInput, View, Text } from 'react-native'


class Input extends Component {
	static propTypes = {
		label: PropTypes.string,
		value: PropTypes.string,
		onChangeText: PropTypes.func,
		placeholder: PropTypes.string,
		secureTextEntry: PropTypes.bool,
	}

	render() {
		const { inputStyle, labelStyle, containerStyle } = styles
		const { label, value, onChangeText, placeholder, secureTextEntry } = this.props
		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					autoCorrect={false}
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
					underlineColorAndroid='transparent'
				/>
			</View>
		)
	}
}
const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 15,
		borderWidth: 1,
		borderColor: '#000'
	}
}

export { Input }
