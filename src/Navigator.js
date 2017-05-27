// @flow

import { StackNavigator } from 'react-navigation'

// Screens
import LobbyPage from './containers/LobbyPage'
import CreateEventPage from './containers/CreateEventPage'
import CreateEventPage2 from './containers/CreateEventPage2'
import CreateEventPage3 from './containers/CreateEventPage3'
import CreateEventPage4 from './containers/CreateEventPage4'
import SetLocationPage from './containers/SetLocationPage'
import EventInfoPage from './containers/EventInfoPage'
import VerificationPage from './containers/VerificationPage'
import InvitationPage from './containers/InvitationPage'
import LoaderPage from './containers/LoaderPage'
import ChatPage from './containers/ChatPage'

const Application = StackNavigator({
	Loader: {
		screen: LoaderPage,
	},
	Verification: {
		screen: VerificationPage,
	},
	Lobby: {
		screen: LobbyPage,
	},
	CreateEvent: {
		screen: CreateEventPage,
	},
	CreateEvent2: {
		screen: CreateEventPage2,
	},
	CreateEvent3: {
		screen: CreateEventPage3,
	},
	CreateEvent4: {
		screen: CreateEventPage4,
	},
	SetLocation: {
		screen: SetLocationPage,
	},
	EventInfo: {
		screen: EventInfoPage,
	},
	Invitation: {
		screen: InvitationPage,
	},
	Chat: {
		screen: ChatPage,
	},
},
	{
		initialRouteName: 'Loader',
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'transparent',
				shadowColor: 'transparent',
				// TODO: Remove shadow
				// TODO: buttons color to white
			},
			headerTitleStyle: {
				color: 'white',
			},
			headerTintColor: '#fff',
		},
	})

export default Application

