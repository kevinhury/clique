// Create Event Form
export const FORM_ADD_CONTACT = 'FORM_ADD_CONTACT'
export const FORM_REMOVE_CONTACT = 'FORM_REMOVE_CONTACT'

// Contacts
export const CONTACTS_PERMISSION_REQUEST = 'CONTACTS_PERMISSION_REQUEST'
export const CONTACTS_PERMISSION_SUCCESS = 'CONTACTS_PERMISSION_SUCCESS'
export const CONTACTS_PERMISSION_DENIED = 'CONTACTS_PERMISSION_DENIED'

type Contact = Object

export type Action =
    { type: 'FORM_ADD_CONTACT', contact: Contact }
  | { type: 'FORM_REMOVE_CONTACT', contact: Contact }
  | { type: 'CONTACTS_PERMISSION_REQUEST'}
  | { type: 'CONTACTS_PERMISSION_SUCCESS', contacts: Array<Contact> }
  | { type: 'CONTACTS_PERMISSION_DENIED', error: string }
  ;
