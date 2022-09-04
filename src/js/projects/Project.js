import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem";

const Project = (props) => {
  const projectsList = [
    {
      company: "Golf Tribe",
      companyDescription:
        "Golf Tribe is a virtual golf simulator company. When Golf Tribe  members log in they are able to schedule bookings, get directions, and view their account.",
      url: "https://golf-tribe.com",
      urlShort: "golf-tribe.com",
      desktopImg: new URL(
        "../../img/projects/desktop/gt.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/gt-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL("../../img/projects/logos/gt-logo.png", import.meta.url),
      builtWith: ["HTML", "CSS", "JS/jQuery", "ExpressJS"],
      repository: "https://github.com/WillsWebsites/golf-tribe",
    },
    {
      company: "Concordia Exchange",
      companyDescription:
        "Concordia Exchange is a custom designed website that utilizes various decorative elements, graphics, and interactive features to provide information easily to their clients.",
      url: "https://www.concordiaexchange.com/",
      urlShort: "concordiaexchange.com",
      desktopImg: new URL(
        "../../img/projects/desktop/concordia.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/concordia-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/concordia-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Concord",
      companyDescription:
        "A custom developed website from start to finish. A site that focuses on developing a consistent, structured brand image.",
      url: "https://www.cwmofnewengland.com/",
      urlShort: "cwmofnewengland.com",
      desktopImg: new URL(
        "../../img/projects/desktop/concord.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/concord-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/concord-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Nestegg Advisors, Inc.",
      companyDescription:
        "The NestEgg Advisors website highlights features such as timed modals, gated content, events with regisration, forms, and is combined with a clean and simple look.",
      url: "https://www.nesteggadvisors.net/",
      urlShort: "nesteggadvisors.net",
      desktopImg: new URL(
        "../../img/projects/desktop/nestegg.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/nestegg-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/nestegg-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Makers Wealth Management",
      companyDescription:
        "MAKERS Wealth Management incorporates branded third-party photography and copy. The website is tightly tailored to have a simple, consistent, brand-focused design.",
      url: "https://www.makerswealthmanagement.com/",
      urlShort: "makerswealthmanagement.com",
      desktopImg: new URL(
        "../../img/projects/desktop/makers.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/makers-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/makers-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "WealthRhino",
      companyDescription:
        "Focused on credibility, Wealth Rhino is a website that makes their clients feel at home. It also features forms, gated content, and even merchandise!",
      url: "https://www.wealthrhino.com/",
      urlShort: "wealthrhino.com",
      desktopImg: new URL(
        "../../img/projects/desktop/rhino.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/rhino-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL("../../img/projects/logos/rhino-logo.png", import.meta.url),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Hemlock Wealth",
      companyDescription: `Hemlock Wealth is a company rooted in the financial industry that focuses on a relaxed financial planning experience, much like the outdoors.`,
      url: "https://www.hemlockwealth.com/",
      urlShort: "hemlockwealth.com",
      desktopImg: new URL(
        "../../img/projects/desktop/hemlock.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/hemlock-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/hemlock-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Anna Hartwell Financial Strategist",
      companyDescription:
        "Anna Hartwell provides a customized approach to finance and gives a safe space for women to manage their finances.",
      url: "https://www.hartwellfp.com/",
      urlShort: "hartwellfp.com",
      desktopImg: new URL(
        "../../img/projects/desktop/hartwell.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/hartwell-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL(
        "../../img/projects/logos/hartwell-logo.png",
        import.meta.url
      ),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
  ];

  return (
    <Fragment>
      {projectsList.map((project, i) => (
        <ProjectItem
          id={i}
          key={Math.random().toFixed(7)}
          company={project.company}
          companyDescription={project.companyDescription}
          url={project.url}
          urlShort={project.urlShort}
          desktopImg={project.desktopImg}
          mobileImg={project.mobileImg}
          logo={project.logo}
          builtWith={project.builtWith}
          repository={project.repository}
        />
      ))}
    </Fragment>
  );
};

export default Project;
