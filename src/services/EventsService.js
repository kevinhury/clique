// @flow

import type { EventForm } from '../actions/types'
import type { IEventsAPI } from '../api/epoch/EventsAPI'

export default (API: IEventsAPI) => {
	return {
		getLatestEvents: (userId: string, accessToken: string) => {
			return API
				.requestEventsAPICall(userId, accessToken)
				.then(data => mapResponseDataToUserEvents(data, userId))
		},
		changeAttendances: (userId: string, accessToken: string, eventId: string, status: string, dates: ?Date[]) => {
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
				.then(data => mapResponseDataToUserEvents([data.results], userId))
				.then(arr => arr[0])
		},
		changeEventFields: (userId: string, accessToken: string, eventId: string, fields: any) => {
			return API
				.modifyEventFieldsAPICall(userId, accessToken, eventId, fields)
		},
	}
}

const mapResponseDataToUserEvents = (events, userId) => {
	return events.map(data => {
		const event = {}
		const myAttendance = data.atendees.find((atendee) => {
			return atendee.pid === userId
		})
		const eventAdmin = data.atendees.find((atendee) => {
			return atendee.admin === 1
		})
		event.id = data.event.id
		event.title = data.event.title
		event.description = data.event.description
		event.location = { latitude: parseInt(data.event.location.split(';')[0]), longitude: parseInt(data.event.location.split(';')[1]), address: null }
		event.location.address = data.event.address
		event.locationName = data.event.locationName
		event.approved = mapUserApprovalInteger(myAttendance.approval)
		event.status = mapEventStatusInteger(data.event.eventStatus)
		event.owner = eventAdmin.username
		event.dates = [eventAdmin.date1, eventAdmin.date2, eventAdmin.date3].filter(x => x).map(x => new Date(x))
		event.isAdmin = eventAdmin.pid === userId
		event.expires = new Date(data.event.expires)
		event.minAtendees = data.event.minAtendees
		event.limitedRSVP = data.event.maxAtendees
		event.invitees = data.atendees.map(atendee => {
			return {
				pid: atendee.pid, name: atendee.username, image: atendee.image_url,
				admin: atendee.admin, approved: mapUserApprovalInteger(atendee.approval)
			}
		})
		return event
	})
}

const mapEventStatusInteger = (status) => {
	switch (status) {
		case 1:
			return 'Cancelled'
		case 2:
			return 'Cliqued'
		default:
			return 'Pending'
	}
}

const mapUserApprovalInteger = (approval) => {
	switch (approval) {
		case 1:
			return 'Declined'
		case 2:
			return 'Approved'
		default:
			return 'Pending'
	}
}
