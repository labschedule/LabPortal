import React, { useState, useEffect } from "react";
import DisplayDaily from "./DisplayDaily";
import DisplayWeekly from "./DisplayWeekly";
import DisplayPictures from "./DisplayPictures";

import { pictures } from "../../data/pictures";

const Display = ({ timer, splitDaily, splitWeekly }) => {

    // Display Daily or Weekly with animation
    const [currentComponent, setCurrentComponent] = useState("DisplayDaily");
    const [animationClass, setAnimationClass] = useState("");
    const [pictureCounter, setPictureCounter] = useState(0);
    let displayComponent = <DisplayDaily splitDaily={splitDaily} />;
  
    useEffect(() => {

      const interval = setInterval(() => {
          setAnimationClass("slide-out-left");

          setTimeout(() => {

          switch(currentComponent) {
              case "DisplayDaily":
                setCurrentComponent("DisplayWeekly");
                break;
              case "DisplayWeekly":
                if (pictures.length !== 0){
                  setCurrentComponent("DisplayPictures");
                }
                else {
                  setCurrentComponent("DisplayDaily");
                }
                break;
              case "DisplayPictures":
                if (pictureCounter+1 < pictures.length){
                  setPictureCounter(pictureCounter+1);
                  setCurrentComponent("DisplayPictures");
                }
                else {
                  setPictureCounter(0);
                  setCurrentComponent("DisplayDaily");
                }
                break;
              default:
                setCurrentComponent("DisplayDaily");
          }

          setAnimationClass("slide-in-right");

          }, 900);
      }, timer*1000);

      return () => {
          clearInterval(interval);
      };
    }, [currentComponent, pictureCounter, timer]);


    switch (currentComponent) {
        case "DisplayDaily":
          displayComponent = <DisplayDaily splitDaily={splitDaily} />;
          break;
        case "DisplayWeekly":
          displayComponent = <DisplayWeekly splitWeekly={splitWeekly} />;
          break;
        default:
          displayComponent = <DisplayPictures pictureName={pictures[pictureCounter]} />;
    }

    return (
        <main className="display-container" style={{ height: "85%" }}>
            <div className={`h-100 display-item ${animationClass}`}>
                {displayComponent}
            </div>
        </main>
    );
};

export default Display;
