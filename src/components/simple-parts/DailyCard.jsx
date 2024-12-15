import { React, useState, useEffect } from "react";
import BaseCard from "./BaseCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { weeklySchedule } from "../../data/schedule";

const split2parts = (part, total) => {
  const splits = [];
  for (let i=0; i<total; i+=part) {
    splits.push({
      "start": i,
      "finish": (i+part<total)?i+part : total
    });
  }
  return splits;
}

const DailyCard = ({ day, splitDisplay }) => {

  // const [displayedHalf, setDisplayedHalf] = useState("firstHalf");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0+splitDisplay);
  const [split, setSplit] = useState(0);
  const splits = split2parts(1, classes.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setSplit((prevSplit) => (prevSplit+1<splits.length)? prevSplit+1:0)
      setStart(split.start);
      setEnd(split.finish);
    }, 5_000);

    return () => {
      clearInterval(interval);
    };
  }, [split]);

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

            <div> 
              {classes.slice(start, end)}
              <div className="mt-3">
                <FontAwesomeIcon icon={faChevronDown} size="xl"/>
              </div>
            </div>
              
            {/* {classes.length > splitDisplay ? (
              displayedHalf === "firstHalf" ? (
                <div> 
                  {classes.slice(0, splitDisplay)}
                  <div className="mt-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl"/>
                  </div>
                </div>
              ) : (
                <div> 
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl" rotation={180} />
                  </div>
                  {classes.slice(splitDisplay, classes.length)}
                </div>
              ) 
            ) : (
              classes
            )} */}
          </div>
        </div>
      </div>

      <div style={{height: "10%"}}></div>

    </section>
  );

  
};

export default DailyCard;
