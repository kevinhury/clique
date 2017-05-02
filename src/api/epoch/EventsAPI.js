// @flow

import AuthAPI from './AuthAPI'
import type { Response } from './BaseAPI'
import type { EventForm } from '../../actions/types'

export type IEventsAPI = {
	requestEventsAPICall(userId: string, accessToken: string): any,
	modifyAttendancesAPICall(userId: string, accessToken: string, eventId: string, status: string, dates: ?Date[]): any,
	cancelEventAPICall(userId: string, accessToken: string, eventId: string): any,
	createEventAPICall(userId: string, accessToken: string, form: EventForm): any,
	modifyEventFieldsAPICall(userId: string, accessToken: string, eventId: string, fields: any): any,
}

export const EventsAPI: IEventsAPI = {
	requestEventsAPICall(userId: string, accessToken: string) {
		return AuthAPI(accessToken)
			.get(`/events/account/${userId}`)
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	modifyAttendancesAPICall(pid: string, accessToken: string, eventId: string, approval: string, dates: ?Date[]) {
		return AuthAPI(accessToken)
			.patch('/events/changeAttendance', { pid, eventId, approval, dates })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	cancelEventAPICall(userId: string, accessToken: string, eventId: string) {
		return AuthAPI(accessToken)
			.patch('/events/cancel', { pid: userId, eventId })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	createEventAPICall(userId: string, accessToken: string, form: EventForm) {
		return AuthAPI(accessToken)
			.post('/events/createEvent', { pid: userId, fields: form })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	modifyEventFieldsAPICall(userId: string, accessToken: string, eventId: string, fields: any) {
		return AuthAPI(accessToken)
			.get('/event/:id/modify', { userId, eventId, fields })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
}