// import React, { useState } from "react";
// import Header from "./components/page-parts/Header";
import React, { useState, useEffect } from "react";
import Display from "./components/page-parts/Display";
import "./App.css";
import "./squares.css"

// import { weeklySchedule } from "./data/schedule";
import { pictures } from "./data/pictures";
import { settings } from "./data/settings";




/*
Background Gradients From -- 
https://uigradients.com
*/

function App() {

  const [backgroundEffects, setBackgroundEffects] = useState(true);
  const [picturesObj, setPicturesObj] = useState([]);

  useEffect(() => {
    const preloadImages = (pictureNames) => {
      const images = pictureNames.map((name) => {
        const img = new Image();
        img.src = `./images/scanners/image/${name}`;
        const img_qr = new Image();
        img_qr.src = `./images/scanners/qr/${name}`;
        return { name, img, img_qr };
      });
      setPicturesObj(images);
    };  

    preloadImages(pictures);
  }, []);

  // useEffect(() => {
  //   console.log("Updated picturesObj:", picturesObj);
  // }, [picturesObj])


  return (
    <div className={`m-0 border-0 h-100 w-100 text-center background`}>
      {/* <Header
        data={{ labName, timer, splitDaily, splitWeekly, lastUpdate }}
        api={{ updateWeeklySchedule, updateImages, updateOther, resetUpdateTimer }}
        api_status={{ loadSchedule, loadPhotos, loadOther }}
      /> */}
      <Display 
        timer={settings.timer} 
        splitDaily={settings.dailysplit} 
        splitWeekly={settings.weeklysplit} 
        picturesObj={picturesObj} 
      />

      {/* Animations for rolling squres */}
      {/* <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div > */}

    </div>
  );
}

export default App;
