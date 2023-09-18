import React from "react";
import DailyCard from "../simple-parts/DailyCard";
import { weeklySchedule } from "../../data/schedule";

const DisplayWeekly = ({ maxDisplay }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const hasSaturday = weeklySchedule.some((item) => item.day === "Sat");
  if (hasSaturday) {
    days.push("Sat");
  }

  return (
    <div className="h-100 container-fluid">
      <div className="h-100 row">
        {/* Render DailyCard components for a week */}
        {days.map((day, index) => (
          <div key={index} className="h-100 col">
            <DailyCard day={day} maxDisplay={maxDisplay} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayWeekly;
