import {
  FORM_ADD_CONTACT,
  FORM_REMOVE_CONTACT,
} from '../actions/types'

export type Contact = {

}

export type State = {
  name: string,
  description: string,
  location: string,
  dates: Array<Date>,
  minAtendees: number,
  maxAtendees: number,
  contacts: Array<Contact>,
  deadline: number
}

export const INITIAL_STATE = {
  name: '',
  description: '',
  location: '',
  dates: [],
  minAtendees: 0,
  maxAtendees: 0,
  contacts: [],
  deadline: 0,
}

export const EventFormReducer = (state: State = INITIAL_STATE, action) => {
  console.log(state)
  switch (action.type) {
    case FORM_ADD_CONTACT: {
      let prevContacts = state.contacts
      const contacts = [ ...prevContacts, action.contact]
      return { ...state, contacts}
    }
    case FORM_REMOVE_CONTACT: {
      let prevContacts = state.contacts
      const index = prevContacts.indexOf(action.contact)
      const contacts = [
        ...prevContacts.slice(0, index),
        ...prevContacts.slice(index + 1)
      ]
      return { ...state, contacts}
    }
    default:
      return state
  }
}
