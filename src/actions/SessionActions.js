// @flow

import { LoginAPI } from '../api/epoch/LoginAPI'
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
						.then((user) => {
							const { success, accessToken, pid, username, image, phone } = user
							if (!success) { throw user }
							dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, accessToken, pid, username, image, phone })
						})
				} else {
					dispatch({ type: ActionTypes.USER_NOT_REGISTERED })
				}
			})
			.catch(() => {
				dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE })
			})
	}