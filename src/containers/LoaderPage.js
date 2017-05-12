// @flow

import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { startAuthentication } from '../actions'
import { Actions } from 'react-native-router-flux'

type LoaderProps = {
	authenticating: boolean,
	authenticated: boolean,
	startAuthentication: () => void,
}

class LoaderPage extends Component {
	props: LoaderProps

	componentDidMount() {
		this.props.startAuthentication()
	}

	componentWillReceiveProps(nextProps: LoaderProps) {
		if (nextProps.authenticated) {
			Actions.main()
		} else if (!nextProps.authenticating) {
			Actions.verificationPage()
		}
	}

	render() {
		return <View style={styles.background}>
			<ActivityIndicator animating size='large' color='white' />
		</View>
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#31A5FD',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

const mapStateToProps = state => {
	const { session } = state
	return { ...session }
}

export default connect(mapStateToProps, {
	startAuthentication,
})(LoaderPage)