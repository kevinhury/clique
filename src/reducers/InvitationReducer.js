// @flow

import * as Actions from '../actions/types'
import type { Action } from '../actions/types'

export const INITIAL_STATE: InvitationState = {
	dates: [],
}

type InvitationState = {
	dates: Date[]
}

export const InvitationReducer = (state: InvitationState = INITIAL_STATE, action: Action): InvitationState => {
	switch (action.type) {
		case Actions.INVITATION_MODIFY_DATES:
			return { ...state, dates: action.dates }
		default:
			return state
	}
}