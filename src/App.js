import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = "3fe497a865c84261b3ca62e1e011d488";
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Business">
              <News
                key="business"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key="entertainment"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Generalhealth">
              <News
                key="generalhealth"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="generalhealth"
              />
            </Route>
            <Route exact path="/Science">
              <News
                key="science"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                key="sports"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Technology">
              <News
                key="technology"
                pageSize={15}
                apiKey={this.apiKey}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
