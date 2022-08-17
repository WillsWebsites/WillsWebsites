import Team from "../../Team/Team";
import Section from "./Section";

import styles from "./Main.module.css";

const Main = (props) => {
  let sectionList = [
    { type: "team" },
    { type: "team" },
    { type: "team" },
    { type: "team" },
    { type: "team" },
  ];

  const sectionSorter = sectionList.map((sectionItem) => (
    <Team
      id={`section_${sectionList.indexOf(sectionItem)}`}
      key={Math.random().toFixed(4)}
    />
  ));

  return (<main className={styles.main}>
    <Section className={'main-banner-section'}>
      <h2>Preview Website:</h2>
    </Section>
    {sectionSorter}
    </main>);
};

export default Main;
