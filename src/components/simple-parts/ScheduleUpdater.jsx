import React from "react";


const ScheduleUpdater = ({ errorVariables }) => {

    const { hasError, errorMessage, updateWeeklySchedule, updateImages } = errorVariables;

    const handleClick = () => {
        updateWeeklySchedule();
        updateImages();
    }

    return (
    <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
        <button
            className="btn btn-dark"
            type="button"
            onClick={handleClick}
        >
            Update
        </button>
        </div>

        <div>
        {hasError && (
            <p className="text-danger text-center m-0">{errorMessage}</p>
        )}
        </div>
    </div>
    );
};

export default ScheduleUpdater;
