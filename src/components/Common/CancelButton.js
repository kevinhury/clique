import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class CancelButton extends Component {
	static propTypes = {
		style: PropTypes.any,
		onPress: PropTypes.func,
	}

	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={[styles.container, this.props.style]}>
					<Text style={styles.x}>x</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'gray',
		borderRadius: 30,
		borderColor: '#fff',
		borderWidth: 1,
		padding: 6,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	x: {
		fontSize: 12,
		backgroundColor: 'transparent',
	}
})

export { CancelButton }
