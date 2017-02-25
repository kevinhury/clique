import {
USER_EVENTS_REQUEST,
USER_EVENTS_REQUEST_SUCCESS,
USER_EVENT_SELECTED,
USER_EVENT_ATTENDANCES_MODIFIED,
USER_EVENT_CANCEL,
USER_EVENT_CREATE,
USER_EVENT_MODIFY_FIELDS,
} from './types'

const mock_invitee: Invitee = {
	name: '',
	image: 'https://facebook.github.io/react/img/logo_og.png',
	approved: true,
	admin: false,
}

export const requestEvents = () => {
	return (dispatch) => {
		dispatch({ type: USER_EVENTS_REQUEST })
		setTimeout(function() {
			dispatch({ type: USER_EVENTS_REQUEST_SUCCESS, list: get_mocks() })
		}, 1000)
	}
}

export const selectEvent = (selected) => {
	return { type: USER_EVENT_SELECTED, selected }
}

export const modifyAttendances = (eventId, status) => {
	return (dispatch) => {
		dispatch({ type: USER_EVENT_ATTENDANCES_MODIFIED, status })
	}
}

export const cancelEvent = (eventId) => {
	return (dispatch) => {
		dispatch({ type: USER_EVENT_CANCEL, eventId })
	}
}

export const createEvent = (event) => {
	return (dispatch) => {
		dispatch({ type: USER_EVENT_CREATE, event })
	}
}

export const modifyEventFields = (fields) => {
	return (dispatch) => {
		dispatch({ type: USER_EVENT_MODIFY_FIELDS, fields })
	}
}

const get_mocks = () => [
	{
		title: 'FIFA 17 SESSION',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Pending',
		status: 'Pending',
		owner: 'You',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [
			{ ...mock_invitee, name: 'Moshe Abutbul' },
			{ ...mock_invitee, name: 'Moshiko Balagan' },
			{ ...mock_invitee, name: 'Kishkush Balabush', approved: false },
		],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'You',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Approved',
		status: 'Cliqued',
		owner: 'You',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Approved',
		status: 'Cancelled',
		owner: 'You',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Approved',
		status: 'Cancelled',
		owner: 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Declined',
		status: 'Pending',
		owner: 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		'title': 'FIFA 17 SESSION',
		'description': 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		'approved': 'Approved',
		'status': 'Cliqued',
		'owner': 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		'isAdmin': false,
		expires: new Date('2011-04-11T10:20:30Z'),
		'minAtendees': 999,
		'limitedRSVP': 0,
		'invitees': [],
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: '72 LA GUARDIA ST.',
		locationName: 'RAMI\'S PLACE',
		approved: 'Approved',
		status: 'Pending',
		owner: 'him',
		date: new Date('2011-04-11T10:20:30Z'),
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
]