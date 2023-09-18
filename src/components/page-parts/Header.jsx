import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import Settings from "../simple-parts/Settings";
import Time from "../simple-parts/Time";


const Header = ({ stateLabName, stateTimer, stateDailyMax, stateWeeklyMax, errorVariables }) => {
  const { labName } = stateLabName;
  const [showModal, setShowModal] = useState(false);
  const [showSettingsButton, setShowSettingsButton] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseClick = () => {
      if (!showModal) {
        setShowSettingsButton(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setShowSettingsButton(false);
        }, 5000);
      }
    };

    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("click", handleMouseClick);
      clearTimeout(timeoutId);
    };
  }, [showModal]);

  return (
    <header className="header" style={{height: "15%"}} >
      <div className="header-left">
        {showSettingsButton && (
          <div className="header-settings">
            <button className="btn btn-dark mx-3 p-3"
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faGear} size="xl" />
            
            </button>
          </div>  
        )}
      </div>
      <div className="header-center bg-white rounded">
        <span>{labName}</span>
      </div>
      <div className="header-right">
        <Time />
      </div>

      {/* Settings Window */}
      <Settings
        stateLabName={stateLabName}
        stateTimer={stateTimer}
        stateDailyMax={stateDailyMax}
        stateWeeklyMax={stateWeeklyMax}
        stateShowModal={{ showModal, setShowModal }}
        errorVariables={errorVariables}
      />
    </header>
  );
};

export default Header;
