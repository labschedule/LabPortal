import React from "react";


const Updater = ({ api }) => {

    const { updateWeeklySchedule, updateImages, updateOther } = api

    const handleClick = () => {
        updateWeeklySchedule();
        updateImages();
        updateOther();
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <button
                className="btn btn-dark"
                type="button"
                onClick={handleClick}
            >
                Update
            </button>
        </div>
    );
};

export default Updater;
