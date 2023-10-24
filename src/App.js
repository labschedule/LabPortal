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
  const [splitDaily, setSplitDaily] = useState(5);
  const [splitWeekly, setSplitWeekly] = useState(4);

  // data loads
  const [loadSchedule, setLoadSchedule] = useState(false);
  const [loadPhotos, setLoadPhotos] = useState(false);
  const [loadOther, setLoadOther] = useState(false);

  // read from api
  const updateWeeklySchedule = () => {

    const apiUrl = "/api/v1/schedule";

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
        setLoadSchedule(true);
      })
      .catch((error) => {
        setLoadSchedule(false);
      });
  };

  const updateImages = () => {

    const apiUrl = "http://localhost:8000/api/v1/images";

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
        setLoadPhotos(true);
      })
      .catch((error) => {
        setLoadPhotos(false);
      })
  };

  const updateOther = () => {

    const apiUrl = "http://localhost:8000/api/v1/settings";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res;
      })
      .then((out) => {
        setLabName(out.labName);
        setSplitDaily(out.dailysplit);
        setSplitWeekly(out.weeklysplit);
        setTimer(out.timer * 1000);
        setLoadOther(true);
      })
      .catch((error) => {
        setLoadOther(false);
      })
  };

  // repeated read
  useEffect(() => {
    const interval = setInterval(() => {
      updateWeeklySchedule();
      updateImages();
      updateOther();
    }, 3_600_000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="m-0 border-0 h-100 w-100 text-center background">
      <Header
        labName={labName}
        loadSchedule={loadSchedule}
        loadPhotos={loadPhotos}
        loadOther={loadOther}
        api={{ updateWeeklySchedule, updateImages, updateOther }}
      />
      <Display timer={timer} splitDaily={splitDaily} splitWeekly={splitWeekly} />
    </div>
  );
}

export default App;
