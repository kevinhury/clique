import React, { Component, PropTypes } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'


class TextComponent extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
	},
	text: {
		color: '#31A5FD',
		textAlign: 'center',
		fontSize: 22,
		padding: 15,
	},
})

export default TextComponent
