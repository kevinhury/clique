import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

// Screens
import PhoneLoginPage from './containers/PhoneLoginPage'
import PhoneConfirmPage from './containers/PhoneConfirmPage'
import LobbyPage from './containers/LobbyPage'
import CreateEventPage from './containers/CreateEventPage'
import CreateEventPage2 from './containers/CreateEventPage2'
import CreateEventPage3 from './containers/CreateEventPage3'
import EventInfoPage from './containers/EventInfoPage'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key='auth'>
      <Scene key='phoneLoginPage' component={PhoneLoginPage} title='Your Phone Number' />
      <Scene key='phoneConfirmPage' component={PhoneConfirmPage} title='Code Confirmation' />
    </Scene>
    <Scene key='main' initial>
      <Scene key='lobbyPage' component={LobbyPage} title='Events' />
      <Scene key='eventInfoPage' component={EventInfoPage} title='Event' initial/>
      <Scene key='createEvent' direction='vertical'>
        <Scene key='createEventPage' component={CreateEventPage} title='Create Event' leftTitle='Cancel' onLeft={ () => Actions.pop()} />
        <Scene key='createEventPage2' component={CreateEventPage2} title='Create Event2' />
        <Scene key='createEventPage3' component={CreateEventPage3} title='Create Event3'/>
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent
