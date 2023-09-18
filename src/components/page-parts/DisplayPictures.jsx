import React from "react";

const DisplayPictures = ({ pictureName }) => {

  const source = `http://127.0.0.1:8000/images/${pictureName}`;

  return (
    <div className="h-100 d-flex justify-content-center align-items-center">

      <img src={source} alt="Lab Images" className="img-fluid" />

    </div>
  );

};

export default DisplayPictures;
