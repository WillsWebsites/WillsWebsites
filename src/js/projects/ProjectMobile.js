import React from "react";

const ProjectMobile = (props) => {
  return (
    <div className="project-mobile">
      <div className="mobile-screen">
        <div className="mobile-tool"></div>
        <div className="mobile-window">
          <div className="mobile-space">
            <div className="utility">
              <div className="search">
                <i className="fas fa-lock"></i>
                <span>{props.urlShort}</span>
              </div>
            </div>
            <figure>
              <img src={props.mobileImg} alt={`${props.company} Mobile Preview`} />
            </figure>
          </div>
        </div>
        <div className="mobile-overlay">
          <div className="mobile-info">
            <h4>Built With</h4>
            <hr />
            <ul>
              {props.builtWith.map((tech) => (
                <li key={Math.random().toFixed(7)}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
