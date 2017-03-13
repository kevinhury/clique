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
	approved: 'Approved',
	admin: false,
}

export const requestEvents = () => {
	return (dispatch) => {
		dispatch({ type: USER_EVENTS_REQUEST })
		setTimeout(() => {
			dispatch({ type: USER_EVENTS_REQUEST_SUCCESS, list: get_mocks() })
		}, 1000)
	}
}

export const selectEvent = (selected) => {
	return { type: USER_EVENT_SELECTED, selected }
}

export const modifyAttendances = (eventId, status) => {
	return (dispatch) => {
		dispatch({ type: USER_EVENT_ATTENDANCES_MODIFIED, eventId, status })
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

const get_mocks = (): Array<Event> => [
	{
		id: '1',
		title: 'FIFA 17 SESSION',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place', lengthInDays: 1,
		approved: 'Pending',
		status: 'Pending',
		owner: 'You',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [
			{ ...mock_invitee, name: 'Moshe Abutbul' },
			{ ...mock_invitee, name: 'Moshiko Balagan' },
			{ ...mock_invitee, name: 'Kishkush Balabush', approved: 'Pending' },
			{ ...mock_invitee, name: 'Lynne Hury', approved: 'Pending' },
			{ ...mock_invitee, name: 'Jordan Hury', approved: 'Declined' },
			{ ...mock_invitee, name: 'Kevin Hury', approved: 'Declined' },
			{ ...mock_invitee, name: 'Netanel Hury' },
		],
	},
	{
		id: '2',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'You',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '3',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Approved',
		status: 'Cliqued',
		owner: 'You',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '4',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Approved',
		status: 'Cancelled',
		owner: 'You',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: true,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '5',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Approved',
		status: 'Cancelled',
		owner: 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '6',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '7',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '8',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Declined',
		status: 'Pending',
		owner: 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
	{
		id: '9',
		'title': 'FIFA 17 SESSION',
		'description': 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		'approved': 'Approved',
		'status': 'Cliqued',
		'owner': 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		'isAdmin': false,
		expires: new Date('2011-04-11T10:20:30Z'),
		'minAtendees': 999,
		'limitedRSVP': 0,
		'invitees': [],
	},
	{
		id: '10',
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: { address: 'Malkat Shva, Ashdod', latitude: 31.777397, longitude: 34.628739 },
		locationName: 'Kevin\'s Place',
		lengthInDays: 1,
		approved: 'Approved',
		status: 'Pending',
		owner: 'him',
		dates: [new Date('2011-04-11T10:20:30Z'), new Date('2011-04-11T10:20:30Z')],
		isAdmin: false,
		expires: new Date('2011-04-11T10:20:30Z'),
		minAtendees: 999,
		limitedRSVP: 0,
		invitees: [],
	},
]