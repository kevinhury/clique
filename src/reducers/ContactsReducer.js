import {
  CONTACTS_PERMISSION_REQUEST,
  CONTACTS_PERMISSION_SUCCESS,
  CONTACTS_PERMISSION_DENIED,
} from '../actions/types'

const INITIAL_STATE = []

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
