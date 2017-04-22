// @flow

// TODO: Replace these
// import * as API from '../api/epoch/EventsAPI'
import * as API from '../api/epoch/FixtureAPI'
import EventsServiceGenerate from '../services/EventsService'
import {
	INVITATION_OPEN,
	INVITATION_MODIFY_DATES,
	INVITATION_ATTENDANCE_REQUEST,
	INVITATION_ATTENDANCE_SUCCESS,
	INVITATION_ATTENDANCE_FAILURE,
} from './types'
import type { Approval } from '../actions/types'

const EventsService = EventsServiceGenerate(API)

export const openInvitation = () => {
	return { type: INVITATION_OPEN }
}

export const invitationChooseDates = (dates: Date[]) => {
	return { type: INVITATION_MODIFY_DATES, dates }
}

export const invitationAttendance = (attendance: Approval, eventId: string, dates: ?Date[]) =>
	(dispatch: (Object) => void) => {
		dispatch({ type: INVITATION_ATTENDANCE_REQUEST, attendance })
		EventsService.changeAttendances('userId', 'accessToken', eventId, attendance, dates)
			.then(() => {
				dispatch({ type: INVITATION_ATTENDANCE_SUCCESS })
			})
			.catch(() => {
				dispatch({ type: INVITATION_ATTENDANCE_FAILURE })
			})
	}