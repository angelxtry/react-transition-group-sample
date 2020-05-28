import React from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import About from './About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <NavLink
            exact
            to="/react-transition-group-sample"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/react-transition-group-sample/about"
            activeClassName="active"
          >
            About
          </NavLink>
        </nav>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/react-transition-group-sample"
                    component={Home}
                  />
                  <Route
                    exact
                    path="/react-transition-group-sample/about"
                    component={About}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
