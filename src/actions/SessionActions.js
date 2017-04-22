// @flow

// TODO: replace these
import { LoginAPI } from '../api/epoch/LoginAPI'
// import * as LoginAPI from '../api/epoch/FixtureAPI'
import LoginServiceGenerate from '../services/LoginService'
import * as SessionService from '../services/SessionService'
import * as ActionTypes from './types'

import type { Action } from './types'

const LoginService = LoginServiceGenerate(LoginAPI)

export const startAuthentication = () =>
	(dispatch: (Action) => void) => {
		SessionService.getCredentialsFromStorage()
			.then((results) => {
				if (results.pid && results.password) {
					dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST })
					LoginService.login(results.pid, results.password)
						.then(({ accessToken, success }) => {
							if (!success) { throw success }
							dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, pid: results.pid, accessToken })
						})
				} else {
					dispatch({ type: ActionTypes.USER_NOT_REGISTERED })
				}
			})
			.catch(() => {
				dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE })
			})
	}