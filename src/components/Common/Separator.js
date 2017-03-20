// @flow

import React from 'react'
import { View, StyleSheet } from 'react-native'

type SeparatorProps = {
	color: string,
}

const Separator = (props: SeparatorProps) =>
	<View style={[styles.separator, { 'backgroundColor': props.color }]} />

const styles = StyleSheet.create({
	separator: {
		marginRight: 10,
		marginLeft: 10,
		height: 1,
		alignSelf: 'stretch',
	},
})

export { Separator }
