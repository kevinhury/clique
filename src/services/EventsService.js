// @flow

// TODO: Replace these
// import * as API from '../api/epoch/EventsAPI'
import * as API from '../api/epoch/FixtureAPI'
import type { EventForm, Approval } from '../actions/types'


export default {
	getLatestEvents: (userId: string, accessToken: string) => {
		return API
			.requestEventsAPICall(userId, accessToken)
	},
	changeAttendances: (userId: string, accessToken: string, eventId: string, status: Approval) => {
		return API
			.modifyAttendancesAPICall(userId, accessToken, eventId, status)
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
