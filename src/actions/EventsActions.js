// @flow

import EventsService from '../services/EventsService'
import {
	USER_EVENTS_REQUEST,
	USER_EVENTS_REQUEST_SUCCESS,
	USER_EVENT_SELECTED,
	USER_EVENT_ATTENDANCES_MODIFIED,
	USER_EVENT_CANCEL,
	USER_EVENT_CREATE,
	USER_EVENT_MODIFY_FIELDS,
} from './types'
import type { Approval, UserEvent, EventForm } from './types'

export const requestEvents = () => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENTS_REQUEST })
		EventsService
			.getLatestEvents('userId', 'accessToken')
			.then((list) => {
				dispatch({ type: USER_EVENTS_REQUEST_SUCCESS, list })
			})
	}
}

export const selectEvent = (selected: UserEvent) => {
	return { type: USER_EVENT_SELECTED, selected }
}

export const modifyAttendances = (eventId: string, status: Approval) => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENT_ATTENDANCES_MODIFIED, eventId, status })
		EventsService.changeAttendances('userId', 'accessToken', eventId, status)
	}
}

export const cancelEvent = (eventId: string) => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENT_CANCEL, eventId })
		EventsService.cancelEventById('userId', 'accessToken', eventId)
	}
}

export const createEvent = (event: EventForm) => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENT_CREATE, event })
		EventsService.createEventWithForm('userId', 'accessToken', event)
	}
}

export const modifyEventFields = (fields: any) => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENT_MODIFY_FIELDS, fields })
		EventsService.changeEventFields('userId', 'accessToken', 'eventId', fields)
	}
}