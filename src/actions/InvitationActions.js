// @flow

import {
	INVITATION_OPEN,
	INVITATION_MODIFY_DATES,
} from './types'

export const openInvitation = () => {
	return { type: INVITATION_OPEN }
}

export const invitationChooseDates = (dates: Date[]) => {
	return { type: INVITATION_MODIFY_DATES, dates }
}