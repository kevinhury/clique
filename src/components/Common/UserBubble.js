// @flow

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Image,
} from 'react-native'
import { defaultColors } from '../../themes/styles'

type UserBubbleProps = {
	style?: Object,
	image: string,
}

class UserBubble extends Component {
	props: UserBubbleProps

	render() {
		const { style, image } = this.props
		return (
			<View style={[styles.container, style]}>
				<Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 30,
		backgroundColor: defaultColors.secondaryColor,
		padding: 1,
	},
	image: {
		flex: 1,
		width: null,
		height: null,
		borderRadius: 15,
	},
})

export default UserBubble
