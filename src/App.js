import React, { useState } from "react";
import Header from "./components/page-parts/Header";
import Display from "./components/page-parts/Display";
import "./App.css";

import { weeklySchedule } from "./data/schedule";
import { pictures } from "./data/pictures";
import { settings } from "./data/settings";

function App() {
  // Settings Options
  const [labName, setLabName] = useState(settings.labName);
  const [timer, setTimer] = useState(settings.timer);
  const [splitDaily, setSplitDaily] = useState(settings.dailysplit);
  const [splitWeekly, setSplitWeekly] = useState(settings.weeklysplit);
  const [lastUpdate, setLastUpdate] = useState(0);

  // data loads
  const [loadSchedule, setLoadSchedule] = useState(false);
  const [loadPhotos, setLoadPhotos] = useState(false);
  const [loadOther, setLoadOther] = useState(false);

  // read from api
  const updateWeeklySchedule = () => {

    const apiUrl = "/api/v1/schedule";

    setLoadSchedule(false);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res.classes;
      })
      .then((classes) => {

        if (classes.length) {

          weeklySchedule.length = 0;
          classes.forEach((item) => weeklySchedule.push(item));

        }
        setLoadSchedule(true);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const updateImages = () => {

    const apiUrl = "http://localhost:8000/api/v1/images";

    setLoadPhotos(false);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.error);
        }
        return res.images;
      })
      .then((images) => {
        if (images.length) {
          pictures.length = 0;
          images.forEach((item) => pictures.push(item));
        }
        setLoadPhotos(true);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const updateOther = () => {

    const apiUrl = "http://localhost:8000/api/v1/settings";

    setLoadOther(false);

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
        setTimer(out.timer);
        setLoadOther(true);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  // repeated api calls
  // useEffect(() => {
  //   updateWeeklySchedule();
  //   updateImages();
  //   updateOther();
  //   resetUpdateTimer();
  // }, []);

  const resetUpdateTimer = () => {
    setLastUpdate(0);
  }

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     setLastUpdate((prevUpdate) => prevUpdate + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="m-0 border-0 h-100 w-100 text-center background">
      <Header
        data={{ labName, timer, splitDaily, splitWeekly, lastUpdate }}
        api={{ updateWeeklySchedule, updateImages, updateOther, resetUpdateTimer }}
        api_status={{ loadSchedule, loadPhotos, loadOther }}
      />
      <Display timer={timer} splitDaily={splitDaily} splitWeekly={splitWeekly} />
    </div>
  );
}

export default App;
