// @flow

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { cancelForm } from './actions'

// Screens
import LobbyPage from './containers/LobbyPage'
import CreateEventPage from './containers/CreateEventPage'
import CreateEventPage2 from './containers/CreateEventPage2'
import CreateEventPage3 from './containers/CreateEventPage3'
import EventInfoPage from './containers/EventInfoPage'
import VerificationPage from './containers/VerificationPage'

type RouterProps = {
	cancelForm: () => void,
}

class RouterComponent extends Component {
	props: RouterProps

	render() {
		return (
			<View style={styles.background}>
				<Router sceneStyle={styles.scene} navigationBarStyle={styles.navbar} titleStyle={styles.title} leftButtonIconStyle={styles.leftButton} leftButtonTextStyle={styles.title}>
					<Scene key='verificationPage' component={VerificationPage} hideNavBar />
					<Scene key='main' initial>
						<Scene key='lobbyPage' component={LobbyPage} title={I18n.t('navigation.eventsTitle')} />
						<Scene key='eventInfoPage' component={EventInfoPage} title={I18n.t('navigation.eventTitle')} />
						<Scene key='createEvent' direction='vertical'>
							<Scene key='createEventPage' component={CreateEventPage} title={I18n.t('navigation.createEventTitle')} leftTitle={I18n.t('cancel')} onLeft={() => { this.props.cancelForm(); Actions.pop() }} />
							<Scene key='createEventPage2' component={CreateEventPage2} title={I18n.t('navigation.createEventTitle')} />
							<Scene key='createEventPage3' component={CreateEventPage3} title={I18n.t('navigation.createEventTitle')} />
						</Scene>
					</Scene>
				</Router>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#31A5FD',
		flex: 1,
	},
	scene: {
		paddingTop: 64,
	},
	navbar: {
		backgroundColor: '#31A5FD',
		borderBottomColor: 'transparent',
	},
	title: {
		color: '#fff',
	},
	leftButton: {
		tintColor: '#fff',
	},
})

const mapStateToProps = () => { return {} }

export default connect(mapStateToProps, {
	cancelForm,
})(RouterComponent)
