const React = require("react");

const Person = props => {
  const fnameRouteValue = props.fname;
  const lnameRouteValue = props.lname;

  const fnameLabel = <span>First name: </span>;
  const fnamePlaceholder = "Enter your fname";
  const lnameLabel = <span>Last name:</span>;
  const lnamePlaceholder = "Enter your lname";
  const fnameInput = (
    <input
      ref="fname"
      className="form-control"
      placeholder={fnamePlaceholder}
      defaultValue={fnameRouteValue}
    />
  );
  const fnameDiv = (
    <div className="form-group">
      {fnameLabel}
      {fnameInput}
    </div>
  );
  const lnameInput = (
    <input
      ref="lname"
      className="form-control"
      placeholder={lnamePlaceholder}
      defaultValue={lnameRouteValue}
    />
  );
  const lnameDiv = (
    <div className="form-group">
      {lnameLabel}
      {lnameInput}
    </div>
  );
  const btn = (
    <a className="btn btn-primary" onClick={this.submit}>
      Click me
    </a>
  );
  const btnDiv = <div className="form-group">{btn}</div>;
  return (
    <div className="well">
      {fnameDiv}
      {lnameDiv}
      {btnDiv}
    </div>
  );
};

module.exports = Person;
