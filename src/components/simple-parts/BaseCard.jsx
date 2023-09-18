import React from "react";

const BaseCard = (props) => {
  const { header, title, text, id } = props;

  return (
    <div className={"card bg-dark text-light mb-2 w-100"} id={id}>
      <div className={"card-header"}>{header}</div>
      <div className="card-body p-1">
        <div className={"card-title"}>{title}</div>
        {text && <p className="card-text">{text}</p>}
      </div>
    </div>
  );
};

export default BaseCard;
