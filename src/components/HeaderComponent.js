import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "/Users/anshulkhatri/Downloads/Resume_github/portfolio/src/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    //this.handleLogin = this.handleLogin.bind(this);
  }
  // toggleNav , is a method so we need to bind it in the class compnent, so that we can use it in the render func.
  //to change its current state, mean to negate its state of open or not. and its a method .

  toggleNav() {
    this.setState({
      isNavopen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      // React fragment, helps to group together bunch of elements to return them.
      //alternative to use a div , if usea div it will add a new node in the virtual DOM. '
      //this empty block below is REact fragment
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/home">
              <img src={logo} height="30" width="41" alt="logo" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link navfont" to="/home">
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link navfont" to="/aboutus">
                    About Me
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link navfont" to="/contactus">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
