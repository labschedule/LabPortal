import React from "react";

const DisplayPictures = ({ pictureName }) => {

  const source = `./images/${pictureName}`;
  const QR = `./qr/${pictureName}`;

  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-light">
      <div className="column w-50">
        <img src={source} alt="Lab Images" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
      <div className="column w-50">
        <img src={QR} alt="Lab Images" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
    </div>
  );

};

export default DisplayPictures;
