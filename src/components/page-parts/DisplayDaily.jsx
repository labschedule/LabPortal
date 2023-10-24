import React from "react";
import SingleCard from "../simple-parts/SingleCard";
import DailyCard from "../simple-parts/DailyCard";

const DisplayDaily = ({ splitDaily }) => {
  const date = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = date.toLocaleString("en-US", options);

  return (
    <div className="h-100 container-fluid">
      <div className="h-100 row">
        <section
          className="h-100 w-50" style={{paddingRight: "0px", paddingLeft: "0px"}}
        >

          <div style={{height: "10%"}}></div>

          <div className="d-flex justify-content-center align-items-center" style={{height: "35%"}}>
            <SingleCard display={"Currently"} />
          </div>

          <div style={{height: "10%"}}></div>

          <div className="d-flex justify-content-center align-items-center" style={{height: "35%"}}>
            <SingleCard display={"Upcoming"} />
          </div>

          <div style={{height: "10%"}}></div>

        </section>
        <section
          className="h-100 w-50" style={{paddingRight: "0px", paddingLeft: "0px"}}
        >

          <DailyCard day={dayOfWeek} splitDisplay={splitDaily} />

        </section>
      </div>
    </div>
  );
};

export default DisplayDaily;
