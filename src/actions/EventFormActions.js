import {
  FORM_ADD_CONTACT,
  FORM_REMOVE_CONTACT,
} from './types'

export const addContact = (contact) => {
  return {
    type: FORM_ADD_CONTACT,
    contact
  }
}

export const removeContact = (contact) => {
  return {
    type: FORM_REMOVE_CONTACT,
    contact
  }
}
