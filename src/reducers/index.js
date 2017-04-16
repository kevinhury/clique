import { combineReducers } from 'redux'
import { LoginReducer as login } from './LoginReducer'
import { EventFormReducer as form } from './EventFormReducer'
import { ContactsReducer as contacts } from './ContactsReducer'
import { EventsReducer as events } from './EventsReducer'
import { PermissionsReducer as permissions } from './PermissionsReducer'
import { InvitationReducer as invitation } from './InvitationReducer'

export default combineReducers({
	login,
	form,
	contacts,
	events,
	permissions,
	invitation,
})
