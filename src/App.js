import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import Navigator from './Navigator'
import './i18n/i18n'
import { defaultColors } from './themes/styles'

const initializeStore = () => {
	const isDebug = __DEV__
	let store = null
	if (isDebug) {
		const logger = createLogger()
		store = createStore(reducers, {}, applyMiddleware(thunk, logger))
	} else {
		store = createStore(reducers, {}, applyMiddleware(thunk))
	}
	return store
}

class App extends Component {
	render() {
		return (
			<Provider store={initializeStore()}>
				<View style={{ backgroundColor: defaultColors.primaryColor, flex: 1 }}>
					<Navigator onNavigationStateChange={null} />
				</View>
			</Provider>
		)
	}
}

export default App
