const React = require("react");
const { Link } = require("react-router");

const CustomNavigator = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Link key={1} to={`/people`}>
        people
      </Link>
      <Link key={2} to={`/movies`}>
        movies
      </Link>
    </div>
  );
};

module.exports = CustomNavigator;
