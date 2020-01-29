const { combineReducers } = require("redux");
const { reducer: movies } = require("./movies");

const { reducer: people } = require("./people");

module.exports = combineReducers({
  movies,
  people
});
