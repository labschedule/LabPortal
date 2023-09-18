import { React } from "react";
import { Modal } from "react-bootstrap";
import ScheduleUpdater from "./ScheduleUpdater";
import SettingsNumberInput from "./SettingsNumberInput";

const Settings = ({ stateLabName, stateTimer, stateDailyMax, stateWeeklyMax, stateShowModal, errorVariables }) => {

  const { labName, setLabName } = stateLabName;
  const { timer, setTimer } = stateTimer;
  const { dailyMax, setDailyMax } = stateDailyMax;
  const { weeklyMax, setWeeklyMax } = stateWeeklyMax;
  const { showModal, setShowModal } = stateShowModal;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLabNameChange = (event) => {
    setLabName(event.target.value);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-3">
          <div className="col-4">Lab Name:</div>
          <div className="col-8">
            <input
              id="labNameInput"
              type="text"
              className="form-control text-center"
              defaultValue={labName}
              onChange={handleLabNameChange}
            />
          </div>
        </div>

        <SettingsNumberInput 
          stateNumber={{ num: timer, setNumber: setTimer }} 
          propsNumber={{ settingsName:"Timer", minNum: 5_000, maxNum: 30_000, stepNum: 5_000, displayFormatNum: ((timer) => `${timer/1000} seconds`)}} 
        />

        <SettingsNumberInput 
          stateNumber={{ num: dailyMax, setNumber: setDailyMax }} 
          propsNumber={{ settingsName:"Daily Max", minNum: 1, maxNum: 8, stepNum: 1, displayFormatNum: ((dailyMax) => `${dailyMax} classes`)}} 
        />

        <SettingsNumberInput 
          stateNumber={{ num: weeklyMax, setNumber: setWeeklyMax }} 
          propsNumber={{ settingsName:"Weekly Max", minNum: 1, maxNum: 8, stepNum: 1, displayFormatNum: ((weeklyMax) => `${weeklyMax} classes`)}} 
        />

        <div className="row mb-3">
          <div className="col-4">Manual Update:</div>
          <div className="col-8">
            <ScheduleUpdater errorVariables={errorVariables} />
          </div>
        </div>

      </Modal.Body>

      <Modal.Footer>
        {/* Add Button to interact with file upload */}
      </Modal.Footer>
    </Modal>
  );
};

export default Settings;
