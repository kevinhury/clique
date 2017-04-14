// @flow

import BaseAPI from './BaseAPI'
import type { Response } from './BaseAPI'
import type { EventForm, Approval } from '../../actions/types'

export type IEventsAPI = {
	requestEventsAPICall(userId: string, accessToken: string): any,
	modifyAttendancesAPICall(userId: string, accessToken: string, eventId: string, status: Approval, dates: ?Date[]): any,
	cancelEventAPICall(userId: string, accessToken: string, eventId: string): any,
	createEventAPICall(userId: string, accessToken: string, form: EventForm): any,
	modifyEventFieldsAPICall(userId: string, accessToken: string, eventId: string, fields: any): any,
}

export const EventsAPI: IEventsAPI = {
	requestEventsAPICall(userId: string, accessToken: string) {
		return BaseAPI
			.get('/events', { userId, accessToken })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	modifyAttendancesAPICall(userId: string, accessToken: string, eventId: string, status: Approval, dates: ?Date[]) {
		return BaseAPI
			.get('/event/:id/modify', { userId, accessToken, eventId, status, dates })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	cancelEventAPICall(userId: string, accessToken: string, eventId: string) {
		return BaseAPI
			.get('/event/:id/cancel', { userId, accessToken, eventId })
			.then((response: Response) => {
				console.log(response)
				return response
			})
	},
	createEventAPICall(userId: string, accessToken: string, form: EventForm) {
		return BaseAPI
			.get('/events/create', { userId, accessToken, form })
			.then((response: Response) => {
				console.log(response)
				return response
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