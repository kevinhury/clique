// @flow

import React from 'react'
import { View, StyleSheet } from 'react-native'

type SeparatorProps = {
	style: any,
}

const Separator = ({ style }: SeparatorProps) =>
	<View style={[styles.separator, style]} />

const styles = StyleSheet.create({
	separator: {
		backgroundColor: '#F1CE81',
		marginRight: 10,
		marginLeft: 10,
		height: 1,
		alignSelf: 'stretch',
	},
})

export { Separator }
