import React from "react";

const DisplayPictures = ({ picture }) => {

  // const source = `./images/scanners/image/${pictureName}`;
  // const source_qr = `./images/scanners/qr/${pictureName}`;

  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-white">
      <div className="column w-50">
        <img src={picture.img.src} alt="Diploma" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
      <div className="column w-50">
        <img src={picture.img_qr.src} alt="Diploma QR" className="img-fluid" style={{ maxHeight: "75%" }} />
      </div>
    </div>
  );

};

export default DisplayPictures;
