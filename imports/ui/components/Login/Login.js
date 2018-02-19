import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";

import "./style.css";

export default class Login extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
    // this.instructions = Blaze.render(
    //   Template.instructions,
    //   ReactDOM.findDOMNode(this.refs.container)
    // );
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
    // Blaze.remove(this.instructions); // Clean up Blaze view
  }
  render() {
    return <span ref="container" />; // Render a placeholder
  }
}
