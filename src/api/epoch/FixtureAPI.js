// @flow

import { get_event_mocks } from '../../fixtures/events'
import type { EventForm, Approval } from '../../actions/types'
import type { PhoneLoginResponse, AuthCodeResponse } from './LoginAPI'

export const phoneLoginAPICall = (phone: string, country: string): Promise<PhoneLoginResponse> => {
	console.log(`PHONE LOGIN API CALL with params: phone ${phone} country ${country}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true })
		}, 1000)
	})
}

export const authenticateCodeAPICall = (code: string): Promise<AuthCodeResponse> => {
	console.log(`AUTH CODE API CALL with params: code ${code}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true })
		}, 1000)
	})
}

export const requestEventsAPICall = (userId: string, accessToken: string) => {
	console.log(`REQ EVENTS API CALL with params: userId ${userId} accessToken ${accessToken}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(get_event_mocks())
		}, 0)
	})
}

export const modifyAttendancesAPICall = (userId: string, accessToken: string, eventId: string, status: Approval, dates: ?Date[]) => {
	console.log(`MODIFY ATT API CALL with params: ${userId} ${accessToken} ${eventId} ${status}`)
	console.log(dates)
	return new Promise((resolve) => {
		setTimeout(() => {
			const obj = { Pending: 'Approved', Approved: 'Declined', Declined: 'Approved' }
			resolve({ userId, eventId, status: obj[status] })
		}, 1000)
	})
}

export const cancelEventAPICall = (userId: string, accessToken: string, eventId: string) => {
	console.log(`CANCEL EVENT API CALL with params: ${userId} ${accessToken} ${eventId}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({})
		}, 1000)
	})
}

export const createEventAPICall = (userId: string, accessToken: string, form: EventForm) => {
	console.log(`CREATE EVENT API CALL with params: ${userId} ${accessToken} ${JSON.stringify(form)}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({})
		}, 1000)
	})
}

export const modifyEventFieldsAPICall = (userId: string, accessToken: string, eventId: string, fields: any) => {
	console.log(`MOD EVENT API CALL with params: ${userId} ${accessToken} ${eventId} ${JSON.stringify(fields)}`)
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({})
		}, 1000)
	})
}