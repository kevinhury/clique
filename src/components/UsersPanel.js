import React, { Component, PropTypes } from 'react'
import {
	View,
	ScrollView,
	StyleSheet,
} from 'react-native'

class UsersPanel extends Component {
	static propTypes = {
		users: PropTypes.array.isRequired,
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.scrollView}
					scrollEnabled={false}
					horizontal
					bounces
				>
					<View style={styles.circle} />
					<View style={styles.circle} />
					<View style={styles.circle} />
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
	},
	scrollView: {
		backgroundColor: 'blue',
		flexDirection: 'row',
	},
	circle: {
		borderRadius: 30,
		height: 40,
		width: 40,
		backgroundColor: '#12fc8b',
	},
})

export default UsersPanel
