// @flow

import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { startAuthentication } from '../actions'

type LoaderProps = {
	navigation: any,
	authenticating: boolean,
	authenticated: boolean,
	startAuthentication: () => void,
}

class LoaderPage extends Component {
	props: LoaderProps
	static navigationOptions = {
		header: null,
	}

	componentDidMount() {
		this.props.startAuthentication()
	}

	componentWillReceiveProps(nextProps: LoaderProps) {
		if (nextProps.authenticated) {
			this.changeRoute('Lobby')
		} else if (!nextProps.authenticating) {
			this.changeRoute('Verification')
		}
	}

	changeRoute(routeName: string) {
		const action = NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName })],
		})
		this.props.navigation.dispatch(action)
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