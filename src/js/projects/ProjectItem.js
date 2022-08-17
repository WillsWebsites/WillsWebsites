import React from "react";
import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

const ProjectItem = (props) => {
  return (
    <li className={`project-item project-item${props.id + 1}`}>
      <ProjectDesktop
        company={props.company}
        companyDescription={props.companyDescription}
        url={props.url}
        urlShort={props.urlShort}
        desktopImg={props.desktopImg}
        logo={props.logo}
        repository={props.repository}
      />

      <ProjectMobile
        urlShort={props.urlShort}
        mobileImg={props.mobileImg}
        builtWith={props.builtWith}
      />
      <button className="btn open-details">View Details</button>
    </li>
  );
};

export default ProjectItem;
