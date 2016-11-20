import {
  FORM_ADD_CONTACT,
  FORM_REMOVE_CONTACT,
  FORM_CHANGE_NAME,
  FORM_CHAGE_DESCRIPTION,
  FORM_CHANGE_LOCATION,
  FORM_ADD_DATE,
  FORM_REMOVE_DATE,
} from './types'

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

export const EventFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_ADD_CONTACT: {
      const contacts = [ ...state.contacts, action.contactId]
      return { ...state, contacts }
    }
    case FORM_REMOVE_CONTACT: {
      const contacts = state.contacts.filter(c => c !== action.contactId)
      return { ...state, contacts }
    }
    case FORM_CHANGE_NAME: {
      return state
    }
    case FORM_CHAGE_DESCRIPTION: {
      return state
    }
    case FORM_CHANGE_LOCATION: {
      return state
    }
    case FORM_ADD_DATE: {
      return state
    }
    case FORM_REMOVE_DATE: {
      return state
    }
    default:
      return state
  }
}
