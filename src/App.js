import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'
import Navigator from './Navigator'
import './i18n/i18n'

const logger = createLogger()
const store = createStore(reducers, {}, applyMiddleware(thunk, logger))

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ backgroundColor: '#31A5FD', flex: 1 }}>
					<Navigator />
				</View>
			</Provider>
		)
	}
}

export default App
