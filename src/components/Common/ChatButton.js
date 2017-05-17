// @flow

import React from 'react'
import {
	StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'
import { defaultColors } from '../../themes/styles'

type ChatButtonProps = {
	title: string,
	onPress: () => void,
}

const ChatButton = (props: ChatButtonProps) => (
	<Button
		small
		icon={{ name: 'md-chatboxes', type: 'ionicon' }}
		title={props.title}
		iconRight
		backgroundColor={defaultColors.primaryColor}
		onPress={props.onPress}
		buttonStyle={styles.chatButton}
	/>
)

const styles = StyleSheet.create({
	chatButton: {
		height: 30,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: '#fff',
	},
})

export { ChatButton }
