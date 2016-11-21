import { INITIAL_STATE, EventFormReducer } from '../EventFormReducer'
import {
  addContact,
  removeContact,
  changeEventName,
  changeEventDescription,
  changeEventLocation,
  addEventDate,
  removeEventDate,
} from '../../actions'

describe('EventFormReducer', () => {
  it('Add contact', () => {
    const stateBefore = { ...INITIAL_STATE, contacts: [] }
    const stateAfter = { ...INITIAL_STATE, contacts: [2] }
    const action = addContact(2)

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('Remove contact', () => {
    const stateBefore = { ...INITIAL_STATE, contacts: [2] }
    const stateAfter = { ...INITIAL_STATE, contacts: [] }
    const action = removeContact(2)

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('Handle invalid action type', () => {
    const stateBefore = { ...INITIAL_STATE }
    const action = { type: 'BLA_BLA', contactId: 2 }

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual({ ...INITIAL_STATE })
  })

  it('Change event name', () => {
    const name = 'K'
    const stateBefore = { ...INITIAL_STATE }
    const stateAfter = { ...INITIAL_STATE, name }
    const action = changeEventName(name)

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('Change event description', () => {
    const description = 'A'
    const stateBefore = { ...INITIAL_STATE }
    const stateAfter = { ...INITIAL_STATE, description }
    const action = changeEventDescription(description)

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('Change event location', () => {
    const location = 'custom location'
    const stateBefore = { ...INITIAL_STATE }
    const stateAfter = { ...INITIAL_STATE, location }
    const action = changeEventLocation(location)

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })
})
