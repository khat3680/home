import React, { Component } from "react";
import Home from "./Homecomponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={() => <About />} />
              <Route exact path="/contactus" component={() => <Contact />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
    //filter is used to make a new list which conatins only those items for which condition is true.
  }
}

export default Main;
