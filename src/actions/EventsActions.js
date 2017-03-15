// @flow

import EventsService from '../services/EventsService'
import {
	USER_EVENTS_REQUEST,
	USER_EVENTS_REQUEST_SUCCESS,
	USER_EVENT_SELECTED,
	USER_EVENT_ATTENDANCES_MODIFIED,
	USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE,
	USER_EVENT_CANCEL,
	USER_EVENT_CANCEL_RESPONSE,
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
		const obj = { Pending: 'Approved', Approved: 'Declined', Declined: 'Approved' }
		dispatch({
			type: USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE,
			userId: 'userId', // TODO: Pass user id
			eventId,
			status: obj[status],
		})
		EventsService
			.changeAttendances('userId', 'accessToken', eventId, status)
			.then((response: any) => {
				dispatch({
					type: USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE,
					userId: response.userId,
					eventId: response.eventId,
					status: response.status,
				})
			})
	}
}

export const cancelEvent = (eventId: string) => {
	return (dispatch: any) => {
		dispatch({ type: USER_EVENT_CANCEL, eventId })
		EventsService
			.cancelEventById('userId', 'accessToken', eventId)
			.then((response: any) => {
				dispatch({
					type: USER_EVENT_CANCEL_RESPONSE,
					eventId: response.eventId,
					success: response.success,
				})
			})
	}
}

export const createEvent = (event: EventForm) => {
	return (dispatch: any) => {
		EventsService
			.createEventWithForm('userId', 'accessToken', event)
			.then((response: any) => {
				dispatch({
					type: USER_EVENT_CREATE,
					eventId: response.eventId,
					success: response.success,
				})
			})
	}
}

export const modifyEventFields = (fields: any) => {
	return (dispatch: any) => {
		EventsService
			.changeEventFields('userId', 'accessToken', 'eventId', fields)
			.then((response: any) => {
				dispatch({ type: USER_EVENT_MODIFY_FIELDS, success: response.success, event: response.event })
			})
	}
}