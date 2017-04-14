// @flow

// Create Event Form
export const FORM_CREATE = 'FORM_CREATE'
export const FORM_MODIFY = 'FORM_MODIFY'
export const FORM_CANCEL = 'FORM_CANCEL'
export const FORM_ADD_CONTACT = 'FORM_ADD_CONTACT'
export const FORM_REMOVE_CONTACT = 'FORM_REMOVE_CONTACT'
export const FORM_CHANGE_NAME = 'FORM_CHANGE_NAME'
export const FORM_CHANGE_DESCRIPTION = 'FORM_CHANGE_DESCRIPTION'
export const FORM_CHANGE_LOCATION_NAME = 'FORM_CHANGE_LOCATION_NAME'
export const FORM_CHANGE_LOCATION = 'FORM_CHANGE_LOCATION'
export const FORM_ADD_DATE = 'FORM_ADD_DATE'
export const FORM_REMOVE_DATE = 'FORM_REMOVE_DATE'
export const FORM_CHANGE_LENGTH = 'FORM_CHANGE_LENGTH'
export const FORM_CHANGE_START_TIME = 'FORM_CHANGE_START_TIME'
export const FORM_CHANGE_RSVP_DEADLINE = 'FORM_CHANGE_RSVP_DEADLINE'
export const FORM_CHANGE_MIN_ATENDEES = 'FORM_CHANGE_MIN_ATENDEES'
export const FORM_CHANGE_MAX_ATENDEES = 'FORM_CHANGE_MAX_ATENDEES'
export const FORM_SELECT_TO_REVIEW = 'FORM_SELECT_TO_REVIEW'

// Contacts
export const CONTACTS_PERMISSION_CHECK = 'CONTACTS_PERMISSION_CHECK'
export const CONTACTS_PERMISSION_REQUEST = 'CONTACTS_PERMISSION_REQUEST'
export const CONTACTS_PERMISSION_AUTHORIZED = 'CONTACTS_PERMISSION_AUTHORIZED'
export const CONTACTS_PERMISSION_DENIED = 'CONTACTS_PERMISSION_DENIED'
export const CONTACTS_LIST_FETCHED = 'CONTACTS_LIST_FETCHED'

// Location
export const LOCATION_PERMISSION_CHECK = 'LOCATION_PERMISSION_CHECK'
export const LOCATION_PERMISSION_REQUEST = 'LOCATION_PERMISSION_REQUEST'
export const LOCATION_PERMISSION_AUTHORIZED = 'LOCATION_PERMISSION_AUTHORIZED'
export const LOCATION_PERMISSION_DENIED = 'LOCATION_PERMISSION_DENIED'
export const LOCATION_CURRENT_USER_FETCHED = 'LOCATION_CURRENT_USER_FETCHED'

// Event
export const USER_EVENTS_REQUEST = 'USER_EVENTS_REQUEST'
export const USER_EVENTS_REQUEST_SUCCESS = 'USER_EVENTS_REQUEST_SUCCESS'
export const USER_EVENT_SELECTED = 'USER_EVENT_SELECTED'
export const USER_EVENT_ATTENDANCES_MODIFIED = 'USER_EVENT_ATTENDANCES_MODIFIED'
export const USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE = 'USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE'
export const USER_EVENT_CANCEL = 'USER_EVENT_CANCEL'
export const USER_EVENT_CANCEL_RESPONSE = 'USER_EVENT_CANCEL_RESPONSE'
export const USER_EVENT_CREATE = 'USER_EVENT_CREATE'
export const USER_EVENT_MODIFY_FIELDS = 'USER_EVENT_MODIFY_FIELDS'

// Invitation
export const INVITATION_OPEN = 'INVITATION_OPEN'
export const INVITATION_MODIFY_DATES = 'INVITATION_MODIFY_DATES'
export const INVITATION_ATTENDANCE_REQUEST = 'INVITATION_ATTENDANCE_REQUEST'
export const INVITATION_ATTENDANCE_SUCCESS = 'INVITATION_ATTENDANCE_SUCCESS'
export const INVITATION_ATTENDANCE_FAILURE = 'INVITATION_ATTENDANCE_FAILURE'

// Login
export const LOGIN_CHANGE_COUNTRY = 'LOGIN_CHANGE_COUNTRY'
export const LOGIN_CHANGE_NUMBER = 'LOGIN_CHANGE_NUMBER'
export const LOGIN_SUBMIT_PHONE = 'LOGIN_SUBMIT_PHONE'
export const LOGIN_SUBMIT_PHONE_BACK = 'LOGIN_SUBMIT_PHONE_BACK'
export const LOGIN_SUBMIT_RESPONSE = 'LOGIN_SUBMIT_RESPONSE'
export const LOGIN_SUBMIT_VERIFICATION = 'LOGIN_SUBMIT_VERIFICATION'
export const LOGIN_SUBMIT_VERIFICATION_RESPONSE = 'LOGIN_SUBMIT_VERIFICATION_RESPONSE'

export type Status =
  'Pending'
  | 'Cancelled'
  | 'Cliqued'

export type Approval =
  'Pending'
  | 'Declined'
  | 'Approved'

export type Location = {
  latitude: number,
  longitude: number,
  address: string,
}

export type Invitee = {
  name: string,
  image: string,
  approved: Approval,
  admin: bool,
}

export type UserEvent = {
  id: string,
  title: string,
  description: string,
  location: Location,
  locationName: string,
  lengthInDays: number,
  approved: Approval,
  status: Status,
  owner: string,
  dates: Array<Date>,
  isAdmin: bool,
  expires: ?Date,
  minAtendees: ?number,
  limitedRSVP: ?number,
  invitees: Array<Invitee>,
}

export type Permission =
  'undetermined'
  | 'authorized'
  | 'denied'

export type Contact = {
  recordID: number,
  name: string,
  phone: string,
  thumnbail: string,
}

export type FormType =
  'INACTIVE'
  | 'CREATE'
  | 'MODIFY'

export type EventForm = {
  name: string,
  description: string,
  locationName: string,
  location: Location,
  dates: Array<Date>,
  minAtendees: number,
  maxAtendees: number,
  contacts: Array<number>,
  length: number,
  startTime: string,
  deadline: number,
  type: FormType,
}

export type CountryCode = {
  cca2: string,
  callingCode: string,
  name: string,
}

export type Action =
  { type: 'FORM_CREATE' }
  | { type: 'FORM_MODIFY', event: UserEvent }
  | { type: 'FORM_CANCEL' }
  | { type: 'FORM_ADD_CONTACT', contactId: number }
  | { type: 'FORM_REMOVE_CONTACT', contactId: number }
  | { type: 'FORM_CHANGE_NAME', name: string }
  | { type: 'FORM_CHANGE_DESCRIPTION', description: string }
  | { type: 'FORM_CHANGE_LOCATION_NAME', locationName: string }
  | { type: 'FORM_CHANGE_LOCATION', location: Location }
  | { type: 'FORM_ADD_DATE', date: Date }
  | { type: 'FORM_REMOVE_DATE', date: Date }
  | { type: 'FORM_CHANGE_LENGTH', length: number }
  | { type: 'FORM_CHANGE_START_TIME', startTime: string }
  | { type: 'FORM_CHANGE_RSVP_DEADLINE', deadline: number }
  | { type: 'FORM_CHANGE_MIN_ATENDEES', atendees: number }
  | { type: 'FORM_CHANGE_MAX_ATENDEES', atendees: number }
  | { type: 'FORM_SELECT_TO_REVIEW', form: EventForm }
  | { type: 'CONTACTS_PERMISSION_CHECK' }
  | { type: 'CONTACTS_PERMISSION_REQUEST' }
  | { type: 'CONTACTS_PERMISSION_AUTHORIZED' }
  | { type: 'CONTACTS_PERMISSION_DENIED' }
  | { type: 'CONTACTS_LIST_FETCHED', contacts: Contact[] }
  | { type: 'LOCATION_PERMISSION_CHECK' }
  | { type: 'LOCATION_PERMISSION_REQUEST' }
  | { type: 'LOCATION_PERMISSION_AUTHORIZED' }
  | { type: 'LOCATION_PERMISSION_DENIED' }
  | { type: 'LOCATION_CURRENT_USER_FETCHED', location: Location }
  | { type: 'USER_EVENTS_REQUEST' }
  | { type: 'USER_EVENTS_REQUEST_SUCCESS', list: UserEvent[] }
  | { type: 'USER_EVENT_SELECTED', selected: UserEvent }
  | { type: 'USER_EVENT_ATTENDANCES_MODIFIED', eventId: string, status: Approval }
  | { type: 'USER_EVENT_ATTENDANCES_MODIFIED_RESPONSE', userId: string, eventId: string, status: Approval }
  | { type: 'USER_EVENT_CANCEL', eventId: string }
  | { type: 'USER_EVENT_CANCEL_RESPONSE', eventId: string, success: boolean }
  | { type: 'USER_EVENT_CREATE', eventId: string, success: boolean }
  | { type: 'USER_EVENT_MODIFY_FIELDS', event: UserEvent, success: boolean }
  | { type: 'LOGIN_CHANGE_COUNTRY', country: CountryCode }
  | { type: 'LOGIN_CHANGE_NUMBER', number: string }
  | { type: 'LOGIN_SUBMIT_PHONE', number: string, country: CountryCode }
  | { type: 'LOGIN_SUBMIT_PHONE_BACK' }
  | { type: 'LOGIN_SUBMIT_RESPONSE', success: boolean }
  | { type: 'LOGIN_SUBMIT_VERIFICATION', code: string }
  | { type: 'LOGIN_SUBMIT_VERIFICATION_RESPONSE', success: boolean }
  | { type: 'INVITATION_MODIFY_DATES', dates: Date[] }

