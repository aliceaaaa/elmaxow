import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>{" "}
      </BrowserRouter>
    );
  }
}
