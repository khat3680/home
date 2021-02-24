import React, { Component } from "react";
import Home from "./Homecomponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchComments,
  fetchPromos,
  fetchLeads,
  postFeedback,
} from "../redux/ActionCreators"; //fetchLeads
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// makes things available to the main componnent, things are props.

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

// makes dispatch available to the main componnent, things are dispatch.
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeads: () => {
    dispatch(fetchLeads());
  },
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    ),
});
//These four are passed as parameters to the add comment and so, that will dispatch.
//Now, what does this do? So as you see, this function call where we're calling the action creator will return the action object for adding a comment,
// that action object is then given as a parameter to the dispatch function here. So the dispatch function obtains that as a parameter,
//and that we are supplying as a function to postComment, and this can be used within our component here.

class Main extends Component {
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeads();
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/aboutus"
                component={() => <About leaders={this.props.leaders} />}
              />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
