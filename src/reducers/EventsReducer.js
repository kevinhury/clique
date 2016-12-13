// @flow
import type { Action } from '../actions/types'

export type Status =
		'Pending'
	| 'Cancelled'
	| 'Cliqued'

export type Invitee = {
	name: string,
	image: string,
	approved: bool,
}

export type Event = {
	title: string,
	description: string,
	location: string,
	approved: bool,
	status: Status,
	owner: string,
	date: string,
	isAdmin: bool,
	expires: ?string,
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
		description: 'string',
		location: 'Location',
		approved: false,
		status: 'Pending',
		owner: 'You',
		date: '14th Wed, December 13:30',
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		invitees: [
			{ ...mock_invitee, name: 'Moshe Abutbul' },
			{ ...mock_invitee, name: 'Moshiko Balagan' },
			{ ...mock_invitee, name: 'Kishkush Balabush', approved: false },
		]
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: 'Location',
		approved: true,
		status: 'Cliqued',
		owner: 'You',
		date: '14th Wed, December 13:30',
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		invitees: []
	},
	{
		title: 'FIFA 17 SESSION',
		description: 'string',
		location: 'Location',
		approved: true,
		status: 'Cancelled',
		owner: 'You',
		date: '14th Wed, December 13:30',
		isAdmin: true,
		expires: '8th Tue, November 19:00',
		invitees: []
	},
]

export const EventsReducer = (state = INITIAL_STATE, action: Action): Array<Event> => {
	switch (action.type) {
	default:
		return state
	}
}
