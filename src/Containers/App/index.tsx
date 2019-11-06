import React, { Component } from 'react';
import Home from '../Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class APP extends Component<{}, {}> {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )};
} 

export default APP;