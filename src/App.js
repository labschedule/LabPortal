import React, { useState, useEffect } from "react";
import Header from "./components/page-parts/Header";
import Display from "./components/page-parts/Display";
import "./App.css";

import { weeklySchedule } from "./data/schedule";
import { pictures } from "./data/pictures";

function App() {
  // Settings Options
  const [labName, setLabName] = useState("Lab Name");
  const [timer, setTimer] = useState(5_000);
  const [dailyMax, setDailyMax] = useState(5);
  const [weeklyMax, setWeeklyMax] = useState(4);

  // reading schedule
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // read from api
  const updateWeeklySchedule = () => {

    const apiUrl = "/api/v1/schedule";

    setHasError(false);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res;
      })
      .then((out) => {
        weeklySchedule.length = 0;
        const classes = out.classes;
        classes.forEach((item) => weeklySchedule.push(item));
      })
      .catch((error) => {
        setErrorMessage("Error, try again later...");
        setHasError(true);
      });
  };

  const updateImages = () => {

    const apiUrl = "http://localhost:8000/api/v1/images";

    setHasError(false);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res;
      })
      .then((out) => {
        pictures.length = 0;
        out.images.forEach((item) => pictures.push(item));
      })
      .catch((error) => {
        setErrorMessage("Error, try again later...");
        setHasError(true);
      })
  };

  // repeated read
  useEffect(() => {
    const interval = setInterval(() => {
      updateWeeklySchedule();
      updateImages();
    }, 3_600_000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="m-0 border-0 h-100 w-100 text-center background">
      <Header
        stateLabName={{ labName, setLabName }}
        stateTimer={{ timer, setTimer }}
        stateDailyMax={{ dailyMax, setDailyMax }}
        stateWeeklyMax={{ weeklyMax, setWeeklyMax }}
        errorVariables={{ hasError, errorMessage, updateWeeklySchedule, updateImages }}
      />
      <Display timer={timer} dailyMax={dailyMax} weeklyMax={weeklyMax} />
    </div>
  );
}

export default App;
