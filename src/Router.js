import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import PhoneLoginPage from './containers/PhoneLoginPage'
import PhoneConfirmPage from './containers/PhoneConfirmPage'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key='root' initial>
      <Scene
        key='phoneLoginPage'
        component={PhoneLoginPage}
        title='Your Phone Number'
        initial
      />
      <Scene
        key='phoneConfirmPage'
        component={PhoneConfirmPage}
        title='Code Confirmation'
      />
    </Scene>
  </Router>
)

export default RouterComponent
