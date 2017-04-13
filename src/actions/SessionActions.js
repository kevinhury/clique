// @flow

// TODO: replace these
// import * as API from '../api/epoch/LoginAPI'
import type { Action } from './types'
import * as API from '../api/epoch/FixtureAPI'
import LoginServiceGenerate from '../services/LoginService'
import * as ActionTypes from './types'

const LoginService = LoginServiceGenerate(API)

export const authenticateUser = () =>
	(dispatch: (Action) => void) => {
		dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST })
		LoginService.authenticatePhoneCode('code')
			.then(({ accessToken, username, pid }: any) => {
				dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, accessToken, username, pid })
			})
			.catch(() => {
				dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE })
			})
	}