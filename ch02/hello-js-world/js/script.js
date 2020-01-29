class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "h3",
      this.props,
      "Hello " + this.props.frameworkName + " world!"
    );
  }
}

class LI extends React.Component {
  render() {
    return React.createElement(
      "li",
      this.props,
      `${this.props.name} => ${this.props.value}`
    );
  }
}
class Person extends React.Component {
  render() {
    return React.createElement(
      "ul",
      null,
      React.createElement(LI, {
        name: "fname",
        value: "foo"
      }),
      React.createElement(LI, {
        name: "lname",
        value: "bar"
      }),
      React.createElement(LI, {
        name: "age",
        value: 10
      }),
      React.createElement(LI, {
        name: "wage",
        value: 100.0
      })
    );
  }
}

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, {
      id: "ember",
      frameworkName: "Ember.js",
      title: "A framework for creating ambitious web applications."
    }),
    React.createElement(HelloWorld, {
      id: "backbone",
      frameworkName: "Backbone.js",
      title: "Backbone.js gives structure to web applications..."
    }),
    React.createElement(HelloWorld, {
      id: "angular",
      frameworkName: "Angular.js",
      title: "Superheroic JavaScript MVW Framework"
    }),
    React.createElement(Person, null)
  ),
  document.getElementById("content")
);
