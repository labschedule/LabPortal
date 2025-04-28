import React from "react";

const DisplayPictures = ({ picture }) => {
  const hasQr = picture?.img_qr?.src;

  return (
    <div className="h-100 d-flex justify-content-center align-items-center bg-white">
      <div className={`column ${hasQr ? 'w-50' : ''}`}>
        <img
          src={picture.img.src}
          alt="Picture"
          className="img-fluid"
          style={{ maxHeight: "75%" }}
        />
      </div>
      {hasQr && (
        <div className="column w-50">
          <img
            src={picture.img_qr.src}
            alt="Picture QR"
            className="img-fluid"
            style={{ maxHeight: "75%" }}
          />
        </div>
      )}
    </div>
  );
};


export default DisplayPictures;
