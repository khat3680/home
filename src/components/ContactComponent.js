import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len); // function of function 
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this); , will done using react redux from.
        // this.handleBlur = this.handleBlur.bind(this);  , will be done, using react redux from.
    }



    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        //alert("Current state is: " + JSON.stringify(values));
        this.props.resetFeedbackForm();
        this.props.postFeedback(
            values.firstname,
            values.lastname,
            values.telnum,
            values.email,
            values.agree,
            values.contactType,
            values.message
        );
    }


    //no validation also, will be done by react redux form

    render() {
        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active >Contact Me</BreadcrumbItem>
                    </Breadcrumb>

                <div className="col-12">
                <h3>Lets Connect!! </h3>
                </div>
                </div>
                {/* <div className="row row-content">
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-success" href="mailto:anshulskhatri@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div> */}
                <div className="row row-content">
                    <div className="col-12">
                        
                        <h3>1. <a role="button" className="btn btn-success" href="mailto:anshulskhatri@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </h3>
                    </div>

                    <div className="col-12">
                        <h3>2. Feel free to fill up the form. </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor='firstname' md={2} >First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                    //value={this.state.firstname}          no longer needed will be done using , react redux componnet.
                                    //valid={errors.firstname === ''}
                                    //invalid={errors.firstname !== ''}
                                    //onBlur={this.handleBlur('firstname')}
                                    //onChange={this.handleInputChange}
                                    />
                                    <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters. ',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='lastname' md={2} >Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        id="lastname"
                                        name='lastname'
                                        placeholder='Last Name'
                                        className="form-control"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                    />
                                    <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters. ',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='telnum' md={2} >Phone Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name='telnum' placeholder='Optional'
                                        className="form-control"
                                        validators={{ minLength: minLength(3), maxLength: maxLength(15), isNumber }} />
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 numbers. ',
                                        maxLength: 'Must be 15 numbers or less. ',
                                        isNumber: 'Must be a number. '
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor='email' md={2} >Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email"
                                        name='email' placeholder='Email'
                                        className="form-control"
                                        validators={{ required, validEmail }} />
                                    <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                        required: 'Required. ',
                                        validEmail: 'Invalid Email Address. '
                                    }}
                                    />
                                </Col>
                            </Row>
                            {/* <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" />{' '}<strong>May we contact you?</strong>
                                        </label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row> */}
                            <Row className="form-group">
                                <Label htmlFor='message' md={2} >Description</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name='message' rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary" >Send Form</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                </div>
            </div>
        );


    }
}

export default Contact;