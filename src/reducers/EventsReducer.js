// @flow

import type { Action } from '../actions/types'
import {
	USER_EVENTS_REQUEST,
	USER_EVENTS_REQUEST_SUCCESS,
} from '../actions/types'

export type Status =
		'Pending'
	| 'Cancelled'
	| 'Cliqued'

export type Approval =
		'Pending'
	| 'Declined'
	|	'Approved'

export type Invitee = {
	name: string,
	image: string,
	approved: bool,
	admin: bool,
}

export type Event = {
	title: string,
	description: string,
	location: string,
	locationName: string,
	approved: Approval,
	status: Status,
	owner: string,
	date: Date,
	isAdmin: bool,
	expires: ?Date,
	minAtendees: ?number,
	limitedRSVP: ?number,
	invitees: Array<Invitee>,
}

export type State = {
	loading: boolean,
	error: boolean,
	list: Array<Event>,
}

export const INITIAL_STATE: State = {
	loading: false,
	error: false,
	list: [],
}

export const EventsReducer = (state: State = INITIAL_STATE, action: Action): State => {
	switch (action.type) {
	case USER_EVENTS_REQUEST:
		return { ...state, loading: true, error: false }
	case USER_EVENTS_REQUEST_SUCCESS:
		return { ...state, list: action.list, loading: false, error: false }
	default:
		return state
	}
}
