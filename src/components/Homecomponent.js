import React from "react";

import pdf from "../resume_2021.pdf";
import me from "../images/anshul.jpeg";

function Home(props) {
  return (
    <div
      className="containerfull"
      style={{
        //backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="body">
        <div className="container" style={{ padding: 0 }}>
          <div className="row" style={{ paddingTop: 100 }}>
            <div className="col-sm" style={{ paddingRight: 50 }}>
              <h4>Hello! Nice to meet you. My name's</h4>
              <h1>ANSHUL KHATRI</h1>
              <h4>
                I'm a computer science student and an aspiring software
                developer who likes to solve his problems with code.
              </h4>
              <h4>
                Currently looking for <mark>Fall 2021 Coop/Internship</mark>{" "}
                opportunities.
              </h4>
            </div>
            <div>
              <img class="me" src={me} alt="Anshul"></img>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 100 }}>
          <h2>Say Hello.</h2>
          <h4>Think we could make something ✨ great ✨ together?</h4>
          <h4>
            <mark>Let's chat!</mark>
          </h4>
          <div className="icons">
            <a
              className="btn btn-social-icon btn-github btn-lg"
              href="https://github.com/khat3680"
            >
              <i className="fa fa-github" title="GitHub"></i>
            </a>
            <a
              className="btn btn-social-icon btn-linkedin btn-lg"
              style={{ margin: 50 }}
              href="http://www.linkedin.com/in/anshul-khatri-certified-full-stack-developer-78b078195"
            >
              <i className="fa fa-linkedin" title="LinkedIn"></i>
            </a>
            <a
              className="btn btn-social-icon btn-lg"
              href="mailto:anshulskhatri@gmai.com"
            >
              <i className="fa fa-envelope-o " title="Email"></i>
            </a>
            <a
              href={pdf}
              style={{ margin: 50 }}
              className="btn btn-social-icon btn-lg"
            >
              <i class="fa fa-file-pdf-o" title="Resume"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
