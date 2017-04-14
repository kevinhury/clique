// @flow

import type { EventForm, Approval } from '../actions/types'
import type { IEventsAPI } from '../api/epoch/EventsAPI'

export default (API: IEventsAPI) => {
	return {
		getLatestEvents: (userId: string, accessToken: string) => {
			return API
				.requestEventsAPICall(userId, accessToken)
		},
		changeAttendances: (userId: string, accessToken: string, eventId: string, status: Approval, dates: ?Date[]) => {
			return API
				.modifyAttendancesAPICall(userId, accessToken, eventId, status, dates)
		},
		cancelEventById: (userId: string, accessToken: string, eventId: string) => {
			return API
				.cancelEventAPICall(userId, accessToken, eventId)
		},
		createEventWithForm: (userId: string, accessToken: string, eventForm: EventForm) => {
			return API
				.createEventAPICall(userId, accessToken, eventForm)
		},
		changeEventFields: (userId: string, accessToken: string, eventId: string, fields: any) => {
			return API
				.modifyEventFieldsAPICall(userId, accessToken, eventId, fields)
		},
	}
}
