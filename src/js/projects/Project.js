import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem";

const Project = (props) => {
  const projectsList = [
    {
      company: "Golf Tribe",
      companyDescription:
        "Golf Tribe is a golf simulator built to take advantage of the most advanced launch monitor technology at a fraction of the price of other hitting bays.",
      url: "https://golf-tribe.com",
      urlShort: "golf-tribe.com",
      desktopImg: new URL("../../img/projects/desktop/gt.jpg?width=1329&height=778", import.meta.url),
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
        "Concordia Exchange is an insurtech company that partners with insurance brokers of organizations with more than 50 employees who want to reduce their employee group insurance costs.",
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
        "Concord uses a 3-step process to offer financial planning services to help you plan for the certainty of uncertainty.",
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
      logo: new URL("../../img/projects/logos/concord-logo.png", import.meta.url),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Nestegg Advisors, Inc.",
      companyDescription:
        "The NestEgg Advisors team strives to be competent, reliable and sensitive to your concerns so that they can make the management of your finances as simple as possible.",
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
      logo: new URL("../../img/projects/logos/nestegg-logo.png", import.meta.url),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Anna Hartwell Financial Strategist",
      companyDescription:
        "Anna Hartwell provides a customized approach to finance. She is an expert in the field who can help people make the best decisions for themselves and their families.",
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
      logo: new URL("../../img/projects/logos/hartwell-logo.png", import.meta.url),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "WealthRhino",
      companyDescription:
        "Smart & successful professionals enlist a WealthRhino advisor to guide them through all of life's most important financial decisions.",
      url: "https://www.wealthrhino.com/",
      urlShort: "wealthrhino.com",
      desktopImg: new URL("../../img/projects/desktop/rhino.jpg?width=1329&height=778", import.meta.url),
      mobileImg: new URL(
        "../../img/projects/mobile/rhino-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL("../../img/projects/logos/rhino-logo.png", import.meta.url),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "Hemlock Wealth",
      companyDescription: `Hemlock Wealth is a company rooted in the financial industry with the goal to provide you and your family the future you deserve.`,
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
      logo: new URL("../../img/projects/logos/hemlock-logo.png", import.meta.url),
      builtWith: ["HTML", "CSS", "JS/jQuery", "FMG Suite Platform"],
    },
    {
      company: "XCountry",
      companyDescription: 'XCountry provides financial game plans that are designed to help clients achieve their individual financial goals throughout the investment curve.',
      url: "https://www.xcountry.financial/",
      urlShort: "xcountry.financial",
      desktopImg: new URL(
        "../../img/projects/desktop/xcountry.jpg?width=1329&height=778",
        import.meta.url
      ),
      mobileImg: new URL(
        "../../img/projects/mobile/xcountry-mobile.jpg?width=393&height=711",
        import.meta.url
      ),
      logo: new URL("../../img/projects/logos/xcountry-logo.png", import.meta.url),
      builtWith: ["HTML", "SCSS/CSS", "JS/jQuery", "FMG Suite Platform"],
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
