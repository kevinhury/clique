import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'
import Router from './Router'



class App extends Component {
	render() {
		const logger = createLogger()
		const store = createStore(reducers, {}, applyMiddleware(thunk, logger))
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App
