import React, { useState, useEffect } from "react";
import BaseCard from "./BaseCard";
import { weeklySchedule } from "../../data/schedule";

const SingleCard = ({ display }) => {
  const getDisplayCard = () => {
    const date = new Date();

    const options = { weekday: "long" };
    const dayOfWeek = date.toLocaleString("en-US", options);

    const dailySchedule = weeklySchedule.filter(
      (item) => item.day === dayOfWeek.slice(0, 3)
    );

    const hour = date.getHours();

    const currentClass = dailySchedule.filter(
      (item) => Number(item.time.slice(0, 2)) === hour
    );

    const nextClass = dailySchedule.filter(
      (item) => Number(item.time.slice(0, 2)) > hour
    );
    

    if (display === "Currently") {
      if (currentClass.length) {
        return currentClass[0];
      }
    } else if (display === "Upcoming") {
      if (nextClass.length) {
        return nextClass[0];
      }
    }

    return {
      time: "-",
      title: "Nothing",
      professor: "-",
    };
  };

  const [displayClass, setDisplayClass] = useState(getDisplayCard);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayClass(getDisplayCard);
    }, 60000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="card text-dark bg-white w-75"
      style={{
        paddingLeft: "0px",
        paddingRight: "0px",
        fontSize: "1.5vw",
      }}
    >
      <div className="card-header single-card-header">
        {display}
      </div>
      <div className="card-body single-card-body">
        <BaseCard
          header={displayClass.time}
          title={displayClass.title}
          text={displayClass.professor}
        />
      </div>
    </div>
  );
};

export default SingleCard;
