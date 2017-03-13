// @flow

import type { Action } from '../actions/types'

const INITIAL_STATE = {
	phoneNumber: '',
	countryCode: '',
}

type State = {
	phoneNumber: string,
	countryCode: string,
}

export const LoginReducer = (state: State = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		default:
			return state
	}
}
