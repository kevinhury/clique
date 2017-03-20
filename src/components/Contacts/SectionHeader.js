// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type SectionHeaderProps = {
	character: string,
}

class SectionHeader extends Component {
	props: SectionHeaderProps

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.character}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 2,
		paddingLeft: 8,
		justifyContent: 'center',
		backgroundColor: '#EAEAEA',
	},
	text: {
		fontSize: 13,
	},
})

export default SectionHeader
