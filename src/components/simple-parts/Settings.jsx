import { React } from "react";
import { Modal } from "react-bootstrap";
import Updater from "./Updater";
import SettingsRow from "./SettingsRow";

import { weeklySchedule } from "../../data/schedule";
import { pictures } from "../../data/pictures";

const Settings = ({ stateShowModal, data, api, api_status }) => {

  const { showModal, setShowModal } = stateShowModal;

  const { labName, timer, splitDaily, splitWeekly } = data;

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

        <SettingsRow title={"Last updated:"} value={`${5} min ${5} sec`} />

        <div className="row mt-4 mb-2">
            <Updater api={api} api_status={api_status} />
        </div>

        {/* <div className="row text-center mb-3">
          <div className="d-flex flex-column align-items-center">
              settings
          </div>
        </div>

        <div className="row text-center mb-3">
          <div className="d-flex flex-column align-items-center">
              schedule
          </div>
        </div>

        <div className="row text-center mb-3">
          <div className="d-flex flex-column align-items-center">
              images
          </div>
        </div> */}

      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;