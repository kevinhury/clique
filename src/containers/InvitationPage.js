// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { connect } from 'react-redux'
import { ProfileIcon } from '../components/Common'

type InvitationPageProps = {

}

class InvitationPage extends Component {
	props: InvitationPageProps

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerBackground}>
						<Text style={styles.title}>FIFA 17 SESSION</Text>
					</View>
					<View style={styles.headerSpace}></View>
					<View style={styles.profilePicture}>
						<ProfileIcon image={'https://facebook.github.io/react/img/logo_og.png'} size={40} borderColor={'white'} />
					</View>
				</View>
				<View style={styles.content}>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 1,
	},
	headerBackground: {
		flex: 12,
		backgroundColor: 'black',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		bottom: 10,
	},
	headerSpace: {
		flex: 1,
	},
	content: {
		flex: 6,
	},
	profilePicture: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, {

})(InvitationPage)
