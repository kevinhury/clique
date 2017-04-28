// @flow

import BaseAPI from './BaseAPI'
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
		return BaseAPI
			.get(`/events/account/${userId}`, { accessToken })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	modifyAttendancesAPICall(pid: string, accessToken: string, eventId: string, approval: string, dates: ?Date[]) {
		return BaseAPI
			.patch('/events/changeAttendance', { pid, accessToken, eventId, approval, dates })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	cancelEventAPICall(userId: string, accessToken: string, eventId: string) {
		return BaseAPI
			.patch('/events/cancel', { pid: userId, accessToken, eventId })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	createEventAPICall(userId: string, accessToken: string, form: EventForm) {
		return BaseAPI
			.post('/events/createEvent', { pid: userId, accessToken, fields: form })
			.then((response: Response) => {
				if (!response.ok) { throw response }
				return response.data
			})
	},
	modifyEventFieldsAPICall(userId: string, accessToken: string, eventId: string, fields: any) {
		return BaseAPI
			.get('/event/:id/modify', { userId, accessToken, eventId, fields })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
}