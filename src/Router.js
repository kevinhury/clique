// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

// Screens
import LobbyPage from './containers/LobbyPage'
import CreateEventPage from './containers/CreateEventPage'
import CreateEventPage2 from './containers/CreateEventPage2'
import CreateEventPage3 from './containers/CreateEventPage3'
import CreateEventPage4 from './containers/CreateEventPage4'
import EventInfoPage from './containers/EventInfoPage'
import VerificationPage from './containers/VerificationPage'
import InvitationPage from './containers/InvitationPage'
import LoaderPage from './containers/LoaderPage'
import ChatPage from './containers/ChatPage'

const RouterComponent = () =>
	<Router sceneStyle={styles.scene} navigationBarStyle={styles.navbar} titleStyle={styles.title} leftButtonIconStyle={styles.leftButton} leftButtonTextStyle={styles.title}>
		<Scene key='loaderPage' component={LoaderPage} initial />
		<Scene key='verificationPage' component={VerificationPage} hideNavBar />
		<Scene key='main' type="replace">
			<Scene key='lobbyPage' component={LobbyPage} title={I18n.t('navigation.eventsTitle')} />
			<Scene key='eventInfoPage' component={EventInfoPage} title={I18n.t('navigation.eventTitle')} />
			<Scene key='chatPage' component={ChatPage} />
			<Scene key='createEvent'>
				<Scene key='createEventPage' component={CreateEventPage} title={I18n.t('navigation.createEventTitle')} />
				<Scene key='createEventPage2' component={CreateEventPage2} title={I18n.t('navigation.createEventTitle')} />
				<Scene key='createEventPage3' component={CreateEventPage3} title={I18n.t('navigation.createEventTitle')} />
				<Scene key='createEventPage4' component={CreateEventPage4} title={I18n.t('navigation.createEventTitle')} />
			</Scene>
			<Scene key='invitationPage' component={InvitationPage} />
		</Scene>
	</Router>

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#31A5FD',
		flex: 1,
	},
	scene: {
		// paddingTop: 64, 
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

export default RouterComponent
