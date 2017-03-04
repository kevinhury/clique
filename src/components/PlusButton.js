import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

type PlusButtonProps = {
	onPress: () => void,
}

const PlusButton = (props: PlusButtonProps) =>
  <Icon
    type='ionicon'
		name='md-add'
		color='#F2AB2A'
		raised
		reverse
		onPress={props.onPress}
		containerStyle={styles.plusButton}
	/>

const styles = StyleSheet.create({
	plusButton: {
		position: 'absolute',
		bottom: 5,
		right: 5,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
	},
})

export default PlusButton