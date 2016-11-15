const INITIAL_STATE = {
  name: '',
  description: '',
  location: '',
  dates: [],
  minAtendees: 0,
  maxAtendees: 0,
  friends: [],
  deadline: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}
