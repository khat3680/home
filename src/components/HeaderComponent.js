import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "/Users/anshulkhatri/Downloads/Resume_github/portfolio/src/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      //isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    //this.toggleModal = this.toggleModal.bind(this);
    //this.handleLogin = this.handleLogin.bind(this);
  }
  // toggleNav , is a method so we need to bind it in the class compnent, so that we can use it in the render func.
  //to change its current state, mean to negate its state of open or not. and its a method .

  // handleLogin(event) {
  //     this.toggleModal();
  //     alert("Username: " + this.username.value + " Password: " + this.password.value
  //         + " Remember: " + this.remember.checked);
  //     event.preventDefault();

  // }

  toggleNav() {
    this.setState({
      isNavopen: !this.state.isNavOpen,
    });
  }

  // toggleModal() {
  //     this.setState({
  //         isModalOpen: !this.state.isModalOpen
  //     });
  //}

  render() {
    return (
      // React fragment, helps to group together bunch of elements to return them.
      //alternative to use a div , if usea div it will add a new node in the virtual DOM. '
      //this empty block below is REact fragment
      <>
        <Navbar dark expand="md" fixed="top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={logo} height="30" width="41" alt="logo" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    About Me
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav> */}
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Anshul Khatri</h1>
                <h4>Software Developer</h4>
              </div>
            </div>
          </div>
        </Jumbotron>
        {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
      </>
    );
  }
}

export default Header;
