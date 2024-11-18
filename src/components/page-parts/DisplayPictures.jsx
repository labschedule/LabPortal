import React from "react";

const DisplayPictures = ({ pictureName }) => {

  const source = `./images/${pictureName}`;
  const source_qr = `./qr/${pictureName}`;

  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-light">
      <div className="column w-50">
        <img src={source} alt="Diploma" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
      <div className="column w-50">
        <img src={source_qr} alt="Diploma QR" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
    </div>
  );

};

export default DisplayPictures;
