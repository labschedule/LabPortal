import { React } from "react";

const SettingsRow = ({ title, value }) => {

  return (

    <div className="row mb-3">
        <div className="col-4">{title}</div>
        <div className="col-8 text-center">
            <p className="text-center m-0">{value}</p>
        </div>
    </div>
    
  );
};

export default SettingsRow;