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
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

function About(props) {
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
            working on new projects. I have good experience in Python, C and
            javascript. I am learning Java and its object oriented properties,
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
          <Media list>
            <div key="1" className="col-12 mt-5">
              <Media tag="li">
                <Media left middle>
                  <Media object src={project1} alt="Project Icon" />
                </Media>
                <Media body className="col-12">
                  <Media heading>Ristorante ConFusion</Media>
                  <p>ReactJs, React Native, CSS, Javascript and EXPO CLI</p>
                  <p>
                    Created a complete application using React Native, Redux,
                    Redux Thunk, forms and other packages of ReactJs. Multipage
                    application with side slide bar, reviews submission and
                    login portals avialable in app.
                  </p>
                  <a href="https://github.com/khat3680/confusion">
                    {" "}
                    --&gt;&gt; Github Link
                  </a>
                </Media>
              </Media>
            </div>

            <div key="1" className="col-12 mt-5">
              <Media>
                <Media left middle>
                  <Media object src={project2} alt="Project Icon" />
                </Media>
                <Media body className="col-12">
                  <Media heading>Bouyancy Stimulation</Media>
                  <p>Javascript, CSS, HTML and Geogabra</p>
                  <p>
                    Created animations using Javacript and CSS objects.
                    Demonstrating the senario of Bouyancy Stimulation by using
                    different samples of objects and variating levels of water.
                    Also made this project using using Geogabra
                  </p>
                  <a href="https://github.com/khat3680/Bouyancy-Stimulation">
                    {" "}
                    --&gt;&gt; Github Link
                  </a>
                </Media>
              </Media>
            </div>

            <div key="1" className="col-12 mt-5">
              <Media tag="li">
                <Media left middle>
                  <Media object src={project3} alt="Project Icon" />
                </Media>
                <Media body className="col-12">
                  <Media heading>Instagram Bot</Media>
                  <p>Python and Selenuim</p>
                  <p>
                    Created a small bot using selenuim web automating
                    techniques, where it logs in into an user's account and
                    shows the full list of people who don't follow you back. It
                    was just a fun project.
                  </p>
                  <a href="https://github.com/khat3680/Instagram_bot">
                    {" "}
                    --&gt;&gt; Github Link
                  </a>
                </Media>
              </Media>
            </div>
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
