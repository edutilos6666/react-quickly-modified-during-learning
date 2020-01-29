const React = require("react");
const ReactDOM = require("react-dom");
const ReactRouter = require("react-router");
const History = require("history");

const Content = require("./content.jsx");
const About = require("./about.jsx");
const Contact = require("./contact.jsx");
const Login = require("./login.jsx");
const Post = require("./post.jsx");
const Posts = require("./posts.jsx");
const { withRouter, browserHistory } = require("react-router");
const Person = require("./person.jsx");

const posts = require("../posts.js");

let { Router, Route, Link } = ReactRouter;

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={withRouter(Content)}>
      <Route path="/about" component={withRouter(About)} />
      <Route path="/posts" component={withRouter(Posts)} posts={posts} />
      <Route path="/posts/:id" component={withRouter(Post)} posts={posts} />
      <Route path="/contact" component={withRouter(Contact)} />
      <Route
        path="/person"
        component={withRouter(Person)}
        fname={"foo"}
        lname={"bar"}
      />
    </Route>
    <Route path="/login" component={withRouter(Login)} />
  </Router>,
  document.getElementById("content")
);
