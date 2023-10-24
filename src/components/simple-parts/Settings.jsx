import { React } from "react";
import { Modal } from "react-bootstrap";
import Updater from "./Updater";

const Settings = ({ stateShowModal, loadSchedule, loadPhotos, loadOther, api }) => {

  const { showModal, setShowModal } = stateShowModal;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      <div className="row mb-3">
          <div className="col-4">Version:</div>
          <div className="col-8 text-center">
            v0.8
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">Data Update:</div>
          <div className="col-8">
            <Updater api={api}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">Schedule:</div>
          <div className="col-8 text-center">
            { 
              loadSchedule? 
              <p className="text-success text-center m-0">Connected</p>:
              <p className="text-danger text-center m-0">Disconnected</p>
            }
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">Photos:</div>
          <div className="col-8 text-center">
            { 
              loadPhotos? 
              <p className="text-success text-center m-0">Connected</p>:
              <p className="text-danger text-center m-0">Disconnected</p>
            }
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">Other:</div>
          <div className="col-8 text-center">
            { 
              loadOther? 
              <p className="text-success text-center m-0">Connected</p>:
              <p className="text-danger text-center m-0">Disconnected</p>
            }
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