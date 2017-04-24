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

export const modifyAttendances =
	(pid: string, accessToken: string, eventId: string, previousStatus: Approval, status: Approval, dates: Date[]) =>
		(dispatch: (Object) => void) => {
			if (status === 'Pending') return
			const obj = { Approved: '2', Declined: '1' }
			const newStatus = obj[status]
			dispatch({ type: USER_EVENT_ATTENDANCES_MODIFIED, loading: true })
			EventsService
				.changeAttendances(pid, accessToken, eventId, newStatus, dates)
				.then(({ success }) => {
					if (!success) throw success
					dispatch({
						type: USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE, success,
						userId: pid, eventId: eventId, status: status, loading: false,
					})
				})
				.catch(() => {
					dispatch({
						type: USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE, success: false,
						status: previousStatus, userId: pid, eventId: eventId, loading: false,
					})
				})
		}

export const cancelEvent = (userId: string, accessToken: string, eventId: string) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: USER_EVENT_CANCEL, eventId })
		EventsService
			.cancelEventById(userId, accessToken, eventId)
			.then(({ success }) => {
				if (!success) throw success
				dispatch({ type: USER_EVENT_CANCEL_RESPONSE, eventId, success })
			})
			.catch(() => {
				dispatch({ type: USER_EVENT_CANCEL_RESPONSE, eventId, success: false })
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