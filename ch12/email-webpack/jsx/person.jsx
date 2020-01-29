let React = require("react");
let ReactDOM = require("react-dom");

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    let fnameNode = ReactDOM.findDOMNode(this.refs.fname);
    let lnameNode = ReactDOM.findDOMNode(this.refs.lname);
    window.alert(`fname = ${fnameNode.value}, lname = ${lnameNode.value}`);
    fnameNode.value = "";
    lnameNode.value = "";
  }

  render() {
    let fnameLabel = <span>First name: </span>;
    let fnamePlaceholder = "Enter your fname";
    let lnameLabel = <span>Last name:</span>;
    let lnamePlaceholder = "Enter your lname";
    let fnameInput = (
      <input
        ref="fname"
        className="form-control"
        placeholder={fnamePlaceholder}
      />
    );
    let fnameDiv = (
      <div className="form-group">
        {fnameLabel}
        {fnameInput}
      </div>
    );
    let lnameInput = (
      <input
        ref="lname"
        className="form-control"
        placeholder={lnamePlaceholder}
      />
    );
    let lnameDiv = (
      <div className="form-group">
        {lnameLabel}
        {lnameInput}
      </div>
    );
    let btn = (
      <a className="btn btn-primary" onClick={this.submit}>
        Click me
      </a>
    );
    let btnDiv = <div className="form-group">{btn}</div>;
    return (
      <div className="well">
        {fnameDiv}
        {lnameDiv}
        {btnDiv}
      </div>
    );
  }
}

module.exports = Person;
