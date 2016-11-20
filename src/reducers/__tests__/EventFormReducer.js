import { INITIAL_STATE, EventFormReducer } from '../EventFormReducer'
import { FORM_ADD_CONTACT, FORM_REMOVE_CONTACT } from '../../actions/types'

describe('EventFormReducer', () => {
  let stateBefore
  let stateAfter

  beforeEach(() => {
    stateBefore = { ...INITIAL_STATE, contacts: [] }
    stateAfter = { ...INITIAL_STATE, contacts: [2] }
  })

  it('Add contact', () => {
    const action = { type: FORM_ADD_CONTACT, contactId: 2 }

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('Remove contact', () => {
    const action = { type: FORM_REMOVE_CONTACT, contactId: 2 }

    expect(
      EventFormReducer(stateAfter, action)
    ).toEqual(stateBefore)
  })

  it('Handle invalid action type', () => {
    const action = { type: 'BLA_BLA', contactId: 2 }

    expect(
      EventFormReducer(stateBefore, action)
    ).toEqual(stateBefore)
  })
})
