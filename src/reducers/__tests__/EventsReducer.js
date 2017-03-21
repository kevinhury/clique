import { INITIAL_STATE, EventsReducer } from '../EventsReducer'
import {
} from '../../actions'

describe('EventsReducer', () => {
	it('should return the initial state', () => {
		expect(
			EventsReducer(undefined, {})
		).toEqual(INITIAL_STATE)
	})
})