import { combineReducers } from 'redux'
import { LoginReducer as login } from './LoginReducer'
import { EventFormReducer as form } from './EventFormReducer'
import { ContactsReducer as contacts } from './ContactsReducer'

export default combineReducers({
  login,
  form,
  contacts,
})
