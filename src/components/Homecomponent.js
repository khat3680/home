import React from "react";
import Background from "../images/black.jpg";
import pdf from "../resume_2021.pdf";

function Home(props) {
  return (
    <div
      className="containerfull"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <p>Hello</p>

        <a href={pdf} target="_blank" rel="nofollow">
          <i class="fad fa-file-pdf"></i>Resume
        </a>
      </div>

      <div class="row row-content">
        <div class="col-sm-6">
          <h2>Certifications</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
