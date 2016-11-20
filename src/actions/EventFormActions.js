import {
  FORM_ADD_CONTACT,
  FORM_REMOVE_CONTACT,
  FORM_CHANGE_NAME,
  FORM_CHAGE_DESCRIPTION,
  FORM_CHANGE_LOCATION,
  FORM_ADD_DATE,
  FORM_REMOVE_DATE,
} from './types'

export const addContact = (contactId: number) => {
  return {
    type: FORM_ADD_CONTACT,
    contactId
  }
}

export const removeContact = (contactId: number) => {
  return {
    type: FORM_REMOVE_CONTACT,
    contactId
  }
}

export const changeEventName = (name: string) => {
  return {
    type: FORM_CHANGE_NAME,
    name
  }
}

export const changeEventDescription = (description: string) => {
  return {
    type: FORM_CHAGE_DESCRIPTION,
    description
  }
}

export const changeEventLocation = (location: string) => {
  return {
    type: FORM_CHANGE_LOCATION,
    location
  }
}

export const addEventDate = (date: Date) => {
  return {
    type: FORM_ADD_DATE,
    date
  }
}

export const removeEventDate = (date: Date) => {
  return {
    type: FORM_REMOVE_DATE,
    date
  }
}
