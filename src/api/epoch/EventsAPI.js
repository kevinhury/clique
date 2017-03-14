// @flow

import BaseAPI from './BaseAPI'
import type { Response } from './BaseAPI'
import type { EventForm, Approval } from '../../actions/types'

export const requestEventsAPICall = (userId: string, accessToken: string) => {
	return BaseAPI
		.get('/events', { userId, accessToken })
		.then((response: Response) => {
			console.log(response)
			return response
		})
}

export const modifyAttendancesAPICall = (userId: string, accessToken: string, eventId: string, status: Approval) => {
	return BaseAPI
		.get('/event/:id/modify', { userId, accessToken, eventId, status })
		.then((response: Response) => {
			console.log(response)
			return response
		})
}

export const cancelEventAPICall = (userId: string, accessToken: string, eventId: string) => {
	return BaseAPI
		.get('/event/:id/cancel', { userId, accessToken, eventId })
		.then((response: Response) => {
			console.log(response)
			return response
		})
}

export const createEventAPICall = (userId: string, accessToken: string, form: EventForm) => {
	return BaseAPI
		.get('/events/create', { userId, accessToken, form })
		.then((response: Response) => {
			console.log(response)
			return response
		})
}

export const modifyEventFieldsAPICall = (userId: string, accessToken: string, eventId: string, fields: any) => {
	return BaseAPI
		.get('/event/:id/modify', { userId, accessToken, eventId, fields })
		.then((response: Response) => {
			console.log(response)
			return response
		})
}