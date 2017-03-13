import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
	Image,
} from 'react-native'

class UserBubble extends Component {
	static propTypes = {
		style: PropTypes.any,
		image: PropTypes.any,
	}
	render() {
		const { style, image } = this.props
		return (
			<View style={[styles.container, style]}>
				<Image source={image} style={styles.image} resizeMode='cover' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 30,
		backgroundColor: '#01a836',
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
