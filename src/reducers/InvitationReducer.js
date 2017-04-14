// @flow

import {
	INVITATION_OPEN,
	INVITATION_ATTENDANCE_REQUEST,
	INVITATION_ATTENDANCE_SUCCESS,
	INVITATION_ATTENDANCE_FAILURE,
	INVITATION_MODIFY_DATES,
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
		case INVITATION_ATTENDANCE_REQUEST:
			return { ...state, loading: true }
		case INVITATION_ATTENDANCE_SUCCESS:
			return { ...state, loading: false }
		case INVITATION_ATTENDANCE_FAILURE:
			return { ...state, loading: false }
		case INVITATION_MODIFY_DATES:
			return { ...state, selectedDates: action.dates }
		default:
			return state
	}
}