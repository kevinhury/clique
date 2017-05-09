// @flow

import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

type HeaderProps = {
	onChangeText: (string) => void,
}

class Header extends Component {
	props: HeaderProps

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Search..."
					onChangeText={this.props.onChangeText}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#C1C1C1',
	},
	input: {
		height: 30,
		flex: 1,
		paddingHorizontal: 8,
		fontSize: 15,
		backgroundColor: '#FFFFFF',
		borderRadius: 2,
	},
})

export default Header
