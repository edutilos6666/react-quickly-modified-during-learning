const React = require("react");
const ReactDOM = require("react-dom");
const { connect } = require("react-redux");

const people = require("../../people.json");
const {
  fetchPeopleActionCreator,
  addPersonActionCreator
} = require("modules/people.js");

class People extends React.Component {
  componentWillMount() {
    console.log("here");
    this.props.fetchPeople(people);

    this.addPerson = this.addPerson.bind(this);
  }

  componentWillUpdate() {
    this.props.fetchPeople(people);
  }

  addPerson(event) {
    console.log(event);
    const fname = ReactDOM.findDOMNode(this.refs.fname).value;
    const lname = ReactDOM.findDOMNode(this.refs.lname).value;
    this.props.addPerson({
      id: 100,
      fname: fname,
      lname: lname
    });

    console.log(this.props.personAdded);
    this.props.fetchPeople();
  }

  render() {
    const { children, people = [] } = this.props;
    const AddPerson = (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          Fname:
          <input type="text" ref="fname" />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          Lname:
          <input type="text" ref="lname" />
        </div>

        <button onClick={this.addPerson}>Add Person</button>
      </div>
    );
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {AddPerson}
        {people && (
          <ul>
            {people.map((one, index) => (
              <li key={index}>
                {one.fname}, {one.lname}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

module.exports = connect(
  ({ people }) => ({
    people: people.all,
    personAdded: people.personAdded
  }),
  {
    fetchPeople: fetchPeopleActionCreator,
    addPerson: addPersonActionCreator
  }
)(People);
