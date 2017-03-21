import { INITIAL_STATE, EventFormReducer } from '../EventFormReducer'
import * as Actions from '../../actions'

describe('EventFormReducer', () => {
	it('should return the initial state', () => {
		expect(
			EventFormReducer(undefined, {})
		).toEqual(INITIAL_STATE)
	})

	it('Checks if type field is set to CREATE', () => {
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, type: 'CREATE' }
		const action = Actions.createForm()

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Checks if type field is set to MODIFY', () => {
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, type: 'MODIFY' }
		const action = Actions.modifyForm({ ...INITIAL_STATE })

		expect(
			EventFormReducer(stateBefore, action).type
		).toEqual(stateAfter.type)
	})

	it('Checks if type field is set to INACTIVE', () => {
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, type: 'INACTIVE' }
		const action = Actions.cancelForm()

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Adds contact', () => {
		const stateBefore = { ...INITIAL_STATE, contacts: [] }
		const stateAfter = { ...INITIAL_STATE, contacts: [2] }
		const action = Actions.addContact(2)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Removes contact', () => {
		const stateBefore = { ...INITIAL_STATE, contacts: [2] }
		const stateAfter = { ...INITIAL_STATE, contacts: [] }
		const action = Actions.removeContact(2)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Handles invalid action type', () => {
		const stateBefore = { ...INITIAL_STATE }
		const action = { type: 'BLA_BLA', contactId: 2 }

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual({ ...INITIAL_STATE })
	})

	it('Changes event name', () => {
		const name = 'K'
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, name }
		const action = Actions.changeEventName(name)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event description', () => {
		const description = 'A'
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, description }
		const action = Actions.changeEventDescription(description)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event location', () => {
		const location = 'custom location'
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, location }
		const action = Actions.changeEventLocation(location)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event location name', () => {
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, locationName: 'My place' }
		const action = Actions.changeLocationName('My place')

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Adds new event date', () => {
		const newDate = new Date()
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, dates: [newDate] }
		const action = Actions.addEventDate(newDate)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Removes event date', () => {
		const oldDate = new Date()
		const stateBefore = { ...INITIAL_STATE, dates: [oldDate] }
		const stateAfter = { ...INITIAL_STATE }
		const action = Actions.removeEventDate(oldDate)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event length', () => {
		const length = 4
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, length }
		const action = Actions.changeEventLength(length)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event start time', () => {
		const startTime = '12:30'
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, startTime }
		const action = Actions.changeStartTime(startTime)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event RSVP Deadline', () => {
		const deadline = 4
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, deadline }
		const action = Actions.changeRSVPDeadline(deadline)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event min atendees', () => {
		const minAtendees = 4
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, minAtendees }
		const action = Actions.changeMinAtendees(minAtendees)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})

	it('Changes event max atendees', () => {
		const maxAtendees = 4
		const stateBefore = { ...INITIAL_STATE }
		const stateAfter = { ...INITIAL_STATE, maxAtendees }
		const action = Actions.changeMaxAtendees(maxAtendees)

		expect(
			EventFormReducer(stateBefore, action)
		).toEqual(stateAfter)
	})
})
