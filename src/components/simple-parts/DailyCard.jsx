import { React, useState, useEffect } from "react";
import BaseCard from "./BaseCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { weeklySchedule } from "../../data/schedule";

const DailyCard = ({ day, maxDisplay }) => {

  const [displayedHalf, setDisplayedHalf] = useState("firstHalf");

  useEffect(() => {
    const interval = setInterval(() => {

      setDisplayedHalf((previousHalf) => 
        previousHalf === "firstHalf" ? "secondHalf" : "firstHalf"
      )
    }, 2_500);

    return () => {
      clearInterval(interval);
    };
  });

  const dailySchedule = weeklySchedule.filter(
    (item) => item.day === day.slice(0, 3)
  );
  const sortedSchedule = dailySchedule.sort((a, b) => a.time > b.time);

  const classes = sortedSchedule.map((classItem) => (
    <BaseCard
      key={classItem.id}
      id={classItem.id}
      header={classItem.time}
      title={classItem.title}
    />
  ));

  return (
    <section
      className="h-100" style={{paddingRight: "0px", paddingLeft: "0px"}}
    >

      <div style={{height: "10%"}}></div>

      <div className="d-flex justify-content-center align-items-center" style={{height: "80%"}}>
        <div
          className="h-100 w-75 card text-dark bg-white my-3"
        >
          <div className="card-header daily-card-header">
            {day}
          </div>
          <div className="card-body daily-card-item">
            {classes.length > maxDisplay ? (
              displayedHalf === "firstHalf" ? (
                <div> 
                  {classes.slice(0, maxDisplay)}
                  <div className="mt-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl"/>
                  </div>
                </div>
              ) : (
                <div> 
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl" rotation={180} />
                  </div>
                  {classes.slice(maxDisplay, classes.length)}
                </div>
              ) 
            ) : (
              classes.slice(0, maxDisplay)
            )}
          </div>
        </div>
      </div>

      <div style={{height: "10%"}}></div>

    </section>
  );

  
};

export default DailyCard;
