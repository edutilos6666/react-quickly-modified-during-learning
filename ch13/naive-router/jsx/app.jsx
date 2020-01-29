const React = require("react");
const ReactDOM = require("react-dom");
const Router = require("./router.jsx");
const Person = require("./person.jsx");

const mapping = {
  "#profile": (
    <div>
      Profile (<a href="#">home</a>)
    </div>
  ),
  "#accounts": (
    <div>
      Accounts (<a href="#">home</a>)
    </div>
  ),
  "#person": <Person />,
  "*": (
    <div>
      Dashboard
      <br />
      <a href="#profile">Profile</a>
      <br />
      <a href="#accounts">Accounts</a>
      <br />
      <a href="#person">Person</a>
    </div>
  )
};

ReactDOM.render(
  <Router mapping={mapping} />,
  document.getElementById("content")
);
