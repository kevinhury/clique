// @flow

// TODO: replace these
// import * as API from '../api/epoch/LoginAPI'
import * as API from '../api/epoch/FixtureAPI'
import LoginServiceGenerate from '../services/LoginService'
import * as SessionService from '../services/SessionService'
import * as ActionTypes from './types'

import type { Action } from './types'

const LoginService = LoginServiceGenerate(API)

export const startAuthentication = () =>
	(dispatch: (Action) => void) => {
		SessionService.getCredentialsFromStorage()
			.then((results) => {
				if (results.pid && results.password) {
					dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST })
					LoginService.login(results.pid, results.password)
						.then(({ accessToken }) =>
							dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, accessToken })
						)
				} else {
					dispatch({ type: ActionTypes.USER_NOT_REGISTERED })
				}
			})
			.catch(() => {
				dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE })
			})
	}