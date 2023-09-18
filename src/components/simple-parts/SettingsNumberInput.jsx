import React from "react";

const SettingsNumberInput = ({ stateNumber, propsNumber }) => {

    const { num, setNumber } = stateNumber;

    const { settingsName, minNum, maxNum, stepNum, displayFormatNum } = propsNumber;

    const increaseNumber = () => {
        if (num < maxNum) {
            setNumber(num + stepNum);
        }
    }

    const decreaseNumber = () => {
        if (num > minNum) {
            setNumber(num - stepNum);
        }
    }

    return (
        <div className="row mb-3">
            <div className="col-4"> {settingsName} </div>
            <div className="col-8">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={decreaseNumber}
                    >
                        -
                    </button>
                    </div>
                    <input
                    id="displayedClassesInput"
                    type="text"
                    className="form-control text-center"
                    value={displayFormatNum(num)}
                    readOnly
                    />
                    <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={increaseNumber}
                    >
                        +
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsNumberInput;
