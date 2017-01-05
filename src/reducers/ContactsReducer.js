import {
	CONTACTS_PERMISSION_REQUEST,
	CONTACTS_PERMISSION_SUCCESS,
	CONTACTS_PERMISSION_DENIED,
} from '../actions/types'

export type Contact = {
	recordId: number,
	name: string,
	phone: string,
	thumnbail: string,
}


const INITIAL_STATE: Contact[] = [
	{
		recordId: 1,
		name: 'Carl Jung',
		phone: '(555) 555-5555',
		thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
	},
	{
		recordId: 2,
		name: 'John Young',
		phone: '(444) 444-4444',
		thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
	},
	{
		recordId: 3,
		name: 'Scooby Doo',
		phone: '(333) 333-3333',
		thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
	},
	{
		recordId: 4,
		name: 'Moshiko Balagan',
		phone: '(222) 222-2222',
		thumbnail: 'https://static1.squarespace.com/static/555b6f0ae4b0fa93f36cc3df/555e469ae4b08ef1ebb4c65e/56a7c77457eb8db1213317bd/1454346716565/thumbnail.png?format=1000w',
	},
]


export const ContactsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case CONTACTS_PERMISSION_REQUEST:
		break
	case CONTACTS_PERMISSION_SUCCESS:
		break
	case CONTACTS_PERMISSION_DENIED:
		break
	default:
		return state
	}
}
