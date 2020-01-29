const { handleActions } = require("redux-actions");

const FETCH_PEOPLE = "people/FETCH_PEOPLE";
const ADD_PERSON = "people/ADD_PERSON";

const initialState = {
  people: []
};

module.exports = {
  fetchPeopleActionCreator: people => ({
    type: FETCH_PEOPLE,
    people
  }),
  addPersonActionCreator: person => ({
    type: ADD_PERSON,
    person
  }),

  reducer: handleActions(
    {
      [FETCH_PEOPLE]: (state, action) => ({
        ...state,
        all: action.people
      }),
      [ADD_PERSON]: (state, action) => ({
        ...[...state.people.all, action.person],
        personAdded: state.all[state.all.length - 1]
      })
    },
    initialState
  )
};
