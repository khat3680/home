import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Me</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>Lets Connect!! </h3>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd_ejSVW-yUh3lkGbOXc8371NGTOqiWQUramRs-t8pM1XiB2Q/viewform?embedded=true"
              width="640"
              height="1050"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
