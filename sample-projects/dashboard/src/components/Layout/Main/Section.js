import React, { useState } from "react";

import Settings from "./Settings";
import AddSection from "./AddSection";
import "./Section.css";

const Section = (props) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [addSectionOpen, setAddSectionOpen] = useState(false);

  const openSettingsHandler = (props) => {
    setSettingsOpen((prevSetting) => !prevSetting);
  };

  const closeSettingsHandler = (props) => {
    setSettingsOpen(false);
  };

  const openAddSectionHandler = props => {
      setAddSectionOpen(true);
  }

  const closeAddSectionHandler = props => {
      setAddSectionOpen(false);
  }

  return (
    <section id={props.id} className={props.className}>
      <div className={"overlay"}>
        <div className={`o-container c-customsection__container`}>
          <div className={`o-grid__collapse ${props.sectionType}`}>
            {props.children}
          </div>
        </div>
      </div>
      <div className={"controls"}>
        <button onClick={openSettingsHandler}>
          <i className="fas fa-cog"></i>
        </button>
        {settingsOpen && (
          <Settings
            onClose={closeSettingsHandler}
            onAdjustSettings={props.onAdjustSettings}
            sectionType={props.sectionType}
            selectedStyle={props.selectedStyle}
          />
        )}
      </div>
      <button className={"add-section"} onClick={openAddSectionHandler}>
        <span className={"add-section--plus"}>+</span>
        <span className={"add-section--wording"}>Add Section</span>
      </button>
      {addSectionOpen && (
        <AddSection
          onClose={closeAddSectionHandler}
          onAdjustSettings={props.onAdjustSettings}
        />
      )}
    </section>
  );
};

export default Section;
