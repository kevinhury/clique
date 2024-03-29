// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type TextComponentProps = {
	text: string,
}

class TextComponent extends Component {
	props: TextComponentProps

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
