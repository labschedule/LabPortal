import React from "react";

import ApiStatus from "./ApiStatus";


const Updater = ({ api, api_status }) => {

    const { updateWeeklySchedule, updateImages, updateOther } = api;

    const { loadSchedule, loadPhotos, loadOther } = api_status;

    const handleClick = () => {
        updateWeeklySchedule();
        updateImages();
        updateOther();
    }

    const all_api_con = loadSchedule & loadPhotos & loadOther;

    return (
        <div className="d-flex flex-column align-items-center">
            <button
                className="btn btn-dark"
                type="button"
                onClick={handleClick}
            >
                Update Now
            </button>
            { (all_api_con)?
                <div></div>:
                <div className="d-flex flex-column">
                    <ApiStatus name={"schedule "} status={loadSchedule}/>
                    <ApiStatus name={"images "} status={loadPhotos}/>
                    <ApiStatus name={"other settings "} status={loadOther}/>
                </div>
            }
        </div>
    );
};

export default Updater;
