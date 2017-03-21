import { INITIAL_STATE, PermissionsReducer } from '../PermissionsReducer'
import * as ContactsActions from '../../actions/ContactsActions'

describe('PermissionsReducer', () => {
	it('should return the initial state', () => {
		expect(
			PermissionsReducer(undefined, {})
		).toEqual(INITIAL_STATE)
	})
})