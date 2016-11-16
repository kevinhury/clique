import Contacts from 'react-native-contacts'
import {} from './types'

export const checkPermissions = () => {
  return (dispatch) => {
    dispatch({ type: 'CONTACTS_PERMISSION_CHECK'})
    Contacts.checkPermission((err, permission) => {
      switch (permission) {
        case 'undefined':
          console.log('undefined')
          break
        case 'authorized':
          console.log('authorized')
          break
        case 'denied':
          console.log('denied')
          break
        default:
          console.log('default')
      }
    })
  }
}

export const requestPermission = () => {
  return (dispatch) => {
    dispatch({ type: 'CONTACTS_PERMISSION_REQUEST'})
    Contacts.requestPermission((err, permission) => {
      switch (permission) {
        default:
          break
      }
    })
  }
}
