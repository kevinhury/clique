// @flow

import {
	INVITATION_OPEN,
	INVITATION_MODIFY_DATES,
	USER_EVENT_ATTENDANCES_MODIFIED,
	USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE,
} from '../actions/types'
import type { Action } from '../actions/types'

export const INITIAL_STATE: InvitationState = {
	loading: false,
	error: null,
	selectedDates: [],
}

type InvitationState = {
	loading: boolean,
	error: any,
	selectedDates: Date[]
}

export const InvitationReducer = (state: InvitationState = INITIAL_STATE, action: Action): InvitationState => {
	switch (action.type) {
		case INVITATION_OPEN:
			return { ...INITIAL_STATE }
		case INVITATION_MODIFY_DATES:
			return { ...state, selectedDates: action.dates }
		case USER_EVENT_ATTENDANCES_MODIFIED:
		case USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE:
			return { ...state, loading: action.loading }
		default:
			return state
	}
}