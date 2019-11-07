import React, { Component } from "react";
import Home from "./components/Home";

import History from "./components/History";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/history" exact component={History} />
          <Route path="/" exact component={Home} />
          <Route component={Home} /> {/*  to handle unknown paths(404 pages) */}
        </Switch>
      </div>
    );
  }
}

export default App;
