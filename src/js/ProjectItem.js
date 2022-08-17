import React from "react";

const ProjectItem = (props) => {
  return (
    <li className={`project-item project-item${props.id + 1}`}>
      <div className="project-desktop">
        <div className="desktop-screen">
          <div className="screen-tool">
            <div className="utility">
              <div className="close dot"></div>
              <div className="hide dot"></div>
              <div className="resize dot"></div>
              <div className="search">
                <i className="fas fa-lock"></i>
                <span>{props.urlShort}</span>
              </div>
            </div>
          </div>
          <figure className="screen-window">
            <img src={props.desktopImg} />
          </figure>
          <div className="desktop-overlay">
            <button className="close-details">X</button>
            <div className="desktop-info">
              <div className="company">
                <a href={props.url} target="_blank">
                  <img src={props.logo} alt={`${props.company} Company Logo`} />
                  <h3>{props.urlShort}</h3>
                </a>
              </div>
              <div className="info-content">
                <p>{props.companyDescription}</p>
                <hr />
                <div className="info-btns">
                  <a href={props.url} target="_blank" className="btn">
                    View Website
                  </a>
                  {props.repository && (
                    <a href={props.repository} target="_blank" className="btn">
                      View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <img src={props.mobileImg} />
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
      <button className="btn open-details">View Details</button>
    </li>
  );
};

export default ProjectItem;
