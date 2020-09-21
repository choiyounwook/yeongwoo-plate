import React from "react";
import { withRouter } from "react-router-dom";
const SomeComponent = withRouter((props) => <MyComponent {...props} />);
export default class MyComponent extends React.Component {
  SomeMethod() {
    const { pathname } = this.props.location;
  }
  render() {
    return console.log({ SomeComponent });
  }
}
