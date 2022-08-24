import { useState, useEffect } from "react";

import Modal from "../../UI/Modal";
import TeamSelector from "../../Team/TeamSelector";

import styles from "./Settings.module.css";

const Settings = (props) => {
  const [settingsType, setSettingsType] = useState(null);
  const [applyStyles, setApplyStyles] = useState(false);

  const sectionType = props.sectionType;
  const settingsAdjust = props.onAdjustSettings;


  const applyStylesHandler = () => {
    setApplyStyles(true)
    return props.onClose();
  };
  

  useEffect(() => {
    
    const teamControls = (
      <li>
        <div className={styles["settings-title"]}>
          <h3>Team Member Style</h3>
        </div>
        <div className={styles["settings-control"]}>
          <TeamSelector onChangeStyle={settingsAdjust} selectedStyle={props.selectedStyle} />
        </div>
      </li>
    );

    if ( sectionType === "c-grid__collapse--TeamList") {
      setSettingsType(teamControls);
    } else {
      setSettingsType(<h2>Choose a section</h2>);
    }
    return () => {
      setSettingsType(null);
    };
  }, [sectionType, settingsAdjust, props.selectedStyle]);

  return (
    <Modal className={styles.settings} onClose={props.onClose}>
      <ul className={styles["settings-list"]}>{settingsType}</ul>
      <div className={styles['settings-lower']}>
        <button className={styles.cancel} onClick={props.onClose}>Cancel</button>
        <button onClick={applyStylesHandler}>Apply</button>
      </div>
    </Modal>
  );
};

export default Settings;
