// @flow

// TODO: Replace these
import { EventsAPI } from '../api/epoch/EventsAPI'
// import * as API from '../api/epoch/FixtureAPI'
import EventsServiceGenerate from '../services/EventsService'
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

const EventsService = EventsServiceGenerate(EventsAPI)

export const requestEvents = (pid: string, accessToken: string) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: USER_EVENTS_REQUEST })
		EventsService
			.getLatestEvents(pid, accessToken)
			.then((list) => {
				dispatch({ type: USER_EVENTS_REQUEST_SUCCESS, list })
			})
			.catch(() => {
				dispatch({ type: USER_EVENTS_REQUEST_SUCCESS, list: [] })
			})
	}

export const selectEvent = (selected: UserEvent) => {
	return { type: USER_EVENT_SELECTED, selected }
}

export const modifyAttendances = (eventId: string, status: Approval) =>
	(dispatch: (Object) => void) => {
		const obj = { Pending: 'Approved', Approved: 'Declined', Declined: 'Approved' }
		dispatch({
			type: USER_EVENT_ATTENDANCES_MODIFIED,
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

export const cancelEvent = (eventId: string) =>
	(dispatch: (Object) => void) => {
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

export const createEvent = (event: EventForm) =>
	(dispatch: (Object) => void) => {
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

export const modifyEventFields = (fields: any) =>
	(dispatch: (Object) => void) => {
		EventsService
			.changeEventFields('userId', 'accessToken', 'eventId', fields)
			.then((response: any) => {
				dispatch({ type: USER_EVENT_MODIFY_FIELDS, success: response.success, event: response.event })
			})
	}