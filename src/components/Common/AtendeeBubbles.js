import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import UserBubble from './UserBubble'

class AtendeeBubbles extends Component {
	static propTypes = {
		style: PropTypes.any,
		images: PropTypes.array,
		bubblesToShow: PropTypes.number,
	}

	renderBubble(uri: string, key: number) {
		return (
      <UserBubble
        style={styles.bubble}
        image={{ uri }}
				key={key}
      />
		)
	}

	renderBubbles(images: Array<string>, count: number) {
		if (images.length === 0)
			return <View style={styles.bubble}/>
		const bubbles = []
		var index = 0
		const min = Math.min(count, images.length)
		for (; index < min; index++) {
			const element = images[index]
			bubbles.push(this.renderBubble(element, index))
		}
		if (min < images.length)
			bubbles.push(this.renderMoreBubble(images.length - min, ++index))
		return bubbles
	}

	renderMoreBubble(bubbles: number, key: number) {
		return (
      <View style={styles.moreBubble} key={key}>
        <Text style={styles.text}>+{bubbles}</Text>
      </View>
		)
	}

	render() {
		return (
      <View style={[styles.container, this.props.style]}>
				{this.renderBubbles(this.props.images, this.props.bubblesToShow)}
      </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: -20,
	},
	bubble: {
		width: 30,
		height: 30,
	},
	moreBubble: {
		backgroundColor: '#000',
		width: 20,
		height: 20,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 1,
	},
	text: {
		backgroundColor: 'transparent',
		color: '#fff',
		fontSize: 10,
	}
})

export { AtendeeBubbles }
