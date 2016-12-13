// @flow
import type { Action } from '../actions/types'

export type Status =
		'Pending'
	| 'Cancelled'
	| 'Cliqued'

export type Approval =
		'Pending'
	| 'Declined'
	|	'Approved'

export type Invitee = {
	name: string,
	image: string,
	approved: bool,
	admin: bool,
}

export type EventDate = {
	date: string,
	time: string,
}

export type Event = {
	title: string,
	description: string,
	location: string,
	approved: Approval,
	status: Status,
	owner: string,
	date: EventDate,
	isAdmin: bool,
	expires: ?EventDate,
	minAtendees: ?number,
	limitedRSVP: ?number,
	invitees: Array<Invitee>,
}

const mock_invitee: Invitee = {
	name: '',
	image: 'https://facebook.github.io/react/img/logo_og.png',
	approved: true,
}

export const INITIAL_STATE: Array<Event> = [
	{
		title: 'FIFA 17 SESSION',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
		location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
		approved: 'Pending',
		status: 'Pending',
		owner: 'You',
		date: {
			date: '14th Wed, December',
			time: '13:30'
		},
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		minAtendees: 999,
		limitedRSVP: false,
		invitees: [
			{ ...mock_invitee, name: 'Moshe Abutbul' },
			{ ...mock_invitee, name: 'Moshiko Balagan' },
			{ ...mock_invitee, name: 'Kishkush Balabush', approved: false },
		]
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
		approved: 'Declined',
		status: 'Cliqued',
		owner: 'You',
		date: {
			date: '14th Wed, December',
			time: '13:30'
		},
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		minAtendees: 999,
		limitedRSVP: false,
		invitees: []
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
		approved: 'Approved',
		status: 'Cliqued',
		owner: 'You',
		date: {
			date: '14th Wed, December',
			time: '13:30'
		},
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		minAtendees: 999,
		limitedRSVP: false,
		invitees: []
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: 'RAMI\'S PLACE - 72 LA GUARDIA ST.',
		approved: 'Approved',
		status: 'Cancelled',
		owner: 'You',
		date: {
			date: '14th Wed, December',
			time: '13:30'
		},
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		minAtendees: 999,
		limitedRSVP: false,
		invitees: []
	},
]

export const EventsReducer = (state = INITIAL_STATE, action: Action): Array<Event> => {
	switch (action.type) {
	default:
		return state
	}
}
