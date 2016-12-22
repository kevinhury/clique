import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'

class Separator extends Component {
	static propTypes = {
		style: PropTypes.any,
	}

	render() {
		return (
      <View style={[styles.separator, this.props.style]}/>
		)
	}
}

const styles = StyleSheet.create({
	separator: {
		marginRight: 10,
		marginLeft: 10,
		height: 1,
	},
})

export { Separator }
