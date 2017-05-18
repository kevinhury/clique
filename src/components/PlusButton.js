// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

type PlusButtonProps = {
	onPress: () => void,
	style: any,
}

const PlusButton = (props: PlusButtonProps) =>
	<Icon
		type='ionicon'
		name='md-add'
		color='#F2AB2A'
		raised
		reverse
		onPress={props.onPress}
		containerStyle={[styles.plusButton, props.style]}
	/>

const styles = StyleSheet.create({
	plusButton: {
		position: 'absolute',
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
		shadowOffset: {},
	},
})

export default PlusButton