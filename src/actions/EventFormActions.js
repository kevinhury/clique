import {
	FORM_CREATE,
	FORM_MODIFY,
	FORM_CANCEL,
	FORM_ADD_CONTACT,
	FORM_REMOVE_CONTACT,
	FORM_CHANGE_NAME,
	FORM_CHANGE_DESCRIPTION,
	FORM_CHANGE_LOCATION_NAME,
	FORM_CHANGE_LOCATION,
	FORM_ADD_DATE,
	FORM_REMOVE_DATE,
	FORM_CHANGE_LENGTH,
	FORM_CHANGE_START_TIME,
	FORM_CHANGE_RSVP_DEADLINE,
	FORM_CHANGE_MIN_ATENDEES,
	FORM_CHANGE_MAX_ATENDEES,
} from './types'

export const createForm = () => {
	return {
		type: FORM_CREATE,
	}
}

export const modifyForm = (event) => {
	return {
		type: FORM_MODIFY,
		event,
	}
}

export const cancelForm = () => {
	return {
		type: FORM_CANCEL,
	}
}

export const addContact = (contactId: number) => {
	return {
		type: FORM_ADD_CONTACT,
		contactId,
	}
}

export const removeContact = (contactId: number) => {
	return {
		type: FORM_REMOVE_CONTACT,
		contactId,
	}
}

export const changeEventName = (name: string) => {
	return {
		type: FORM_CHANGE_NAME,
		name,
	}
}

export const changeEventDescription = (description: string) => {
	return {
		type: FORM_CHANGE_DESCRIPTION,
		description,
	}
}

export const changeLocationName = (locationName: string) => {
	return {
		type: FORM_CHANGE_LOCATION_NAME,
		locationName,
	}
}

export const changeEventLocation = (location: string) => {
	return {
		type: FORM_CHANGE_LOCATION,
		location,
	}
}

export const addEventDate = (date: Date) => {
	return {
		type: FORM_ADD_DATE,
		date,
	}
}

export const removeEventDate = (date: Date) => {
	return {
		type: FORM_REMOVE_DATE,
		date,
	}
}

export const changeEventLength = (length: number) => {
	return {
		type: FORM_CHANGE_LENGTH,
		length,
	}
}

export const changeStartTime = (startTime: string) => {
	return {
		type: FORM_CHANGE_START_TIME,
		startTime,
	}
}

export const changeRSVPDeadline = (deadline: number) => {
	return {
		type: FORM_CHANGE_RSVP_DEADLINE,
		deadline,
	}
}
export const changeMinAtendees = (atendees: number) => {
	return {
		type: FORM_CHANGE_MIN_ATENDEES,
		atendees,
	}
}

export const changeMaxAtendees = (atendees: number) => {
	return {
		type: FORM_CHANGE_MAX_ATENDEES,
		atendees,
	}
}