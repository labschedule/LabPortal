import { React } from "react";
import { Modal } from "react-bootstrap";
import Updater from "./Updater";
import SettingsRow from "./SettingsRow";

import { weeklySchedule } from "../../data/schedule";
import { pictures } from "../../data/pictures";

const Settings = ({ stateShowModal, data, api, api_status }) => {

  const { showModal, setShowModal } = stateShowModal;

  const { labName, timer, splitDaily, splitWeekly, lastUpdate } = data;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const int2timer = (sec) => {

    const hours = Math.floor(sec/3600);
    const minutes = Math.floor(sec/60);
    const seconds = sec % 60;

    const hoursDisplay = hours > 0 ? hours.toString().padStart(2, '0') + 'h' : '';
    const minutesDisplay = minutes > 0 ? minutes.toString() + 'm' : '';
    const secondsDisplay = seconds.toString() + 's';

    return `${hoursDisplay} ${minutesDisplay} ${secondsDisplay}`

  }

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <SettingsRow title={"Version:"} value={"v0.9"} />

        <SettingsRow title={"Name:"} value={labName} />

        <SettingsRow title={"Timer:"} value={`${timer} sec`} />

        <SettingsRow title={"Split-daily:"} value={`${splitDaily} classes`} />

        <SettingsRow title={"Split-weekly:"} value={`${splitWeekly} classes`} />

        <SettingsRow title={"Schedule:"} value={`${weeklySchedule.length} classes`} />

        <SettingsRow title={"Images:"} value={`${pictures.length} found`} />

        <SettingsRow title={"Last updated:"} value={int2timer(lastUpdate)} />

        <div className="row mt-4 mb-2">
            <Updater api={api} api_status={api_status} />
        </div>

      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;