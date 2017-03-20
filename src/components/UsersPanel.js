// @flow

import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

type UsersPanelProps = {
	users: any[]
}

class UsersPanel extends Component {
	props: UsersPanelProps

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
