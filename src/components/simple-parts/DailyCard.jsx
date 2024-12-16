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

  const [split, setSplit] = useState(0);
  const [splits, setSplits] = useState([]);
  const [dispClasses, setDispClasses] = useState([]);



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

  useEffect(() => {
    setSplits(split2parts(splitDisplay, classes.length));
    const c = classes.slice(0,splitDisplay);
    setDispClasses(c);
    setSplit((prev) => (prev+1<splits.length)?prev+1:0);
  }, []);


  useEffect(() => {
    // console.log(classes[0], dispClasses[0]);
    const interval = setInterval(() => {
      // console.log(classes?.[0]?.key !== dispClasses?.[0]?.key);
      const c = classes.slice(split*splitDisplay,split*splitDisplay+splitDisplay);
      setDispClasses(c);
      setSplit((prev) => (prev+1<splits.length)?prev+1:0);
      
    }, 2_500);

    return () => {
      clearInterval(interval);
    };
  }, [dispClasses]);

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
              { (classes?.[0]?.key !== dispClasses?.[0]?.key) ? (
                  <div className="mb-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl" rotation={180} />
                  </div>
                ) : (
                  <div> 
                  </div>
                )
              }
              {dispClasses}
              { (classes?.at(-1)?.key !== dispClasses?.at(-1)?.key) ? (
                  <div className="mt-3">
                    <FontAwesomeIcon icon={faChevronDown} size="xl" />
                  </div>
                ) : (
                  <div> 
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>

      <div style={{height: "10%"}}></div>

    </section>
  );

  
};

export default DailyCard;
