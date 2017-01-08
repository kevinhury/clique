// @flow

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

// Screens
import PhoneLoginPage from './containers/PhoneLoginPage'
import PhoneConfirmPage from './containers/PhoneConfirmPage'
import LobbyPage from './containers/LobbyPage'
import CreateEventPage from './containers/CreateEventPage'
import CreateEventPage2 from './containers/CreateEventPage2'
import CreateEventPage3 from './containers/CreateEventPage3'
import EventInfoPage from './containers/EventInfoPage'
import SetLocationPage from './containers/SetLocationPage'


// TODO: change padding top to Navigator.NavigationBar.Styles.General.TotalNavHeight
const RouterComponent = () => (
	<View style={styles.background}>
		<Router sceneStyle={styles.scene} navigationBarStyle={styles.navbar}>
			<Scene key='auth'>
				<Scene key='phoneLoginPage' component={PhoneLoginPage} title={I18n.t('navigation.phoneLoginTitle')} />
				<Scene key='phoneConfirmPage' component={PhoneConfirmPage} title={I18n.t('navigation.phoneConfirmTitle')} />
			</Scene>
			<Scene key='main' initial>
				<Scene key='lobbyPage' component={LobbyPage} title={I18n.t('navigation.eventsTitle')} />
				<Scene key='eventInfoPage' component={EventInfoPage} title={I18n.t('navigation.eventTitle')} />
				<Scene key='createEvent' direction='vertical'>
					<Scene key='createEventPage' component={CreateEventPage} title={I18n.t('navigation.createEventTitle')} leftTitle={I18n.t('cancel')} onLeft={() => Actions.pop()} />
					<Scene key='createEventPage2' component={CreateEventPage2} title={I18n.t('navigation.createEventTitle')} />
					<Scene key='createEventPage3' component={CreateEventPage3} title={I18n.t('navigation.createEventTitle')} />
					<Scene key='setLocationPage' component={SetLocationPage} title={I18n.t('navigation.setLocationTitle')} />
				</Scene>
			</Scene>
		</Router>
	</View>
)

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
})

export default RouterComponent
