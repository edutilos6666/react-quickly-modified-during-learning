const React = require("react");
const { Router, Route, IndexRoute, browserHistory } = require("react-router");
const App = require("components/app/app");
const Movies = require("components/movies/movies.js");
const Movie = require("components/movie/movie.js");
const People = require("components/People/People.js");
const CustomNavigator = require("components/CustomNavigator/CustomNavigator.js");

module.exports = (
  <Router history={browserHistory}>
    <Route path="people" component={People} />
    <Route path="/" component={App}>
      <IndexRoute component={CustomNavigator} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
);
