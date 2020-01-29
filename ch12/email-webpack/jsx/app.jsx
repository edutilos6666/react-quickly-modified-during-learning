require("../css/main.css");

const React = require("react");
const ReactDOM = require("react-dom");
const Content = require("./content.jsx");
const Person = require("./person.jsx");

ReactDOM.render(
  <div>
    <Content />
    <Person />
  </div>,
  document.getElementById("content")
);
