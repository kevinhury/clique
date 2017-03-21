import { INITIAL_STATE, LoginReducer } from '../LoginReducer'
import {
} from '../../actions'

describe('LoginReducer', () => {
	it('should return the initial state', () => {
		expect(
			LoginReducer(undefined, {})
		).toEqual(INITIAL_STATE)
	})
})