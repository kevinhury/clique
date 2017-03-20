// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native'

type FormButtonProps = {
	text: string,
	placeholder: string,
	onPress: () => void,
	style?: Object,
	textStyle?: Object,
}

class FormButton extends Component {
	props: FormButtonProps

	render() {
		const highlighted = this.props.text && this.props.text.length > 0
		const colorStyle = highlighted ? styles.highlighted : styles.normal
		const textColor = highlighted ? undefined : styles.normalText
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={[styles.button, this.props.style, colorStyle]}>
					<Text style={[styles.text, this.props.textStyle, textColor]}>
						{this.props.text || this.props.placeholder}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 6,
	},
	highlighted: {
		borderColor: '#31A5FD',
	},
	normal: {
		borderColor: '#BFBFBF',
	},
	text: {
		fontSize: 18,
	},
	normalText: {
		color: '#BFBFBF',
	},
})

export { FormButton }
