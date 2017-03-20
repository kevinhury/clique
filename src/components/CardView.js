// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import type { Children } from 'react'

type CardViewProps = {
	children?: Children,
	style?: Object,
}

class CardView extends Component {
	props: CardViewProps

	render() {
		return (
			<View style={[styles.card, this.props.style]}>
				{this.props.children}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		margin: 10,
		marginBottom: 0,
		borderWidth: 1,
		borderColor: 'white',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		padding: 5,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 3,
		flex: 1,
		justifyContent: 'space-between',
	},
})
export default CardView
