import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function Renderleader({ leader }) {
  return (
    <div key={leader.id} className="col-12 mt-5">
      <Media tag="li">
        <Media left middle>
          <Media object src={baseUrl + leader.image} alt={leader.name} />
        </Media>
        <Media body className="col-12">
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
          <a href={leader.gitlink}> --&gt;&gt; Github Link</a>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  const leaders = props.leaders.leaders.map((leader) => {
    return <Renderleader leader={leader} />;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Me</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Me</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Hello!!</h2>
          <p>
            I am a university student studying Computer Science, currently
            deploying a Masks / No Mask Model on Android using react and Android
            SDK. I currently have good experience in Python, C and javascript. I
            am currently learning Java and its object oriented properties,
            Software Engineering, Microprocessors and Entrepreneur Skills.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">Education</CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-4">Start- Graduate</dt>
                <dd className="col-8">2019 -2023</dd>
                <dt className="col-4">Name</dt>
                <dd className="col-8">Wilfrid Laurier university</dd>
                <dt className="col-4">Location</dt>
                <dd className="col-8">Waterloo, Onatrio</dd>
                <dt className="col-4">Course</dt>
                <dd className="col-8">Bachelor's of Computer Science</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  There is no pill to convert yourself as a good programmer, it
                  takes lots of reading, learning and practice. So start now.
                </p>
                <footer className="blockquote-footer">
                  Geshan Manandhar
                  <cite title="Source Title">, Twitter</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Current Projects</h2>
        </div>
        <div className="col-12">
          <Media list>{leaders}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;
