import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native'

class FormButton extends Component {
	static propTypes = {
		text: PropTypes.string,
		placeholder: PropTypes.string,
		onPress: PropTypes.func,
		style: PropTypes.any,
		textStyle: PropTypes.any,
	}

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
