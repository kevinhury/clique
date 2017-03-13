// @flow

import type { UserEvent, Action } from '../actions/types'
import {
	USER_EVENTS_REQUEST,
	USER_EVENTS_REQUEST_SUCCESS,
	USER_EVENT_SELECTED,
	USER_EVENT_ATTENDANCES_MODIFIED,
} from '../actions/types'

type State = {
	loading: boolean,
	error: boolean,
	list: Array<UserEvent>,
	selected: ?UserEvent,
}

export const INITIAL_STATE: State = {
	loading: false,
	error: false,
	list: [],
	selected: null,
}

export const EventsReducer = (state: State = INITIAL_STATE, action: Action): State => {
	switch (action.type) {
		case USER_EVENTS_REQUEST:
			return { ...state, loading: true, error: false, selected: null }
		case USER_EVENTS_REQUEST_SUCCESS:
			return { ...state, list: action.list, loading: false, error: false, selected: null }
		case USER_EVENT_SELECTED:
			return { ...state, selected: action.selected }
		case USER_EVENT_ATTENDANCES_MODIFIED: {
			const list = [...state.list]
			let selected = list.filter((x) => x.id === action.eventId)[0]
			const index = list.indexOf(selected)
			selected = { ...selected, approved: action.status }
			list[index] = selected
			return { ...state, list, selected }
		} default:
			return state
	}
}
