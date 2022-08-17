import { useState, useEffect } from "react";

import Modal from "../../UI/Modal";
import TeamSelector from "../../Team/TeamSelector";

import styles from "./Settings.module.css";

const Settings = (props) => {
  const [settingsType, setSettingsType] = useState(null);

  const sectionType = props.sectionType;
  const settingsAdjust = props.onAdjustSettings;

  useEffect(() => {
    const teamControls = (
      <li>
        <div className={styles["settings-title"]}>
          <h3>Team Member Style</h3>
        </div>
        <div className={styles["settings-control"]}>
          <TeamSelector onChangeStyle={settingsAdjust} />
        </div>
      </li>
    );
    if (sectionType === "c-grid__collapse--TeamList") {
      setSettingsType(teamControls);
    } else {
      setSettingsType(<h2>Choose a section</h2>);
    }
    return () => {
      setSettingsType(null);
    };
  }, [sectionType, settingsAdjust]);

  return (
    <Modal className={styles.settings} onClose={props.onClose}>
      <ul className={styles["settings-list"]}>{settingsType}</ul>
      <button onClick={props.onClose}>Done</button>
    </Modal>
  );
};

export default Settings;
