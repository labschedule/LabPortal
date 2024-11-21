import React, { useState, useEffect } from "react";
import DisplayDaily from "./DisplayDaily";
import DisplayWeekly from "./DisplayWeekly";
import DisplayPictures from "./DisplayPictures";

import { pictures } from "../../data/pictures";

const Display = ({ timer, splitDaily, splitWeekly, setBackgroundEffects }) => {

    // Display Daily or Weekly with animation
    const [currentComponent, setCurrentComponent] = useState("DisplayDaily");
    const [animationClass, setAnimationClass] = useState("");
    const [pictureCounter, setPictureCounter] = useState(0);
    const [lastSchedule, setLastSchedule] = useState("DisplayDaily");
    let displayComponent = <DisplayDaily splitDaily={splitDaily} />;
  
    useEffect(() => {

      const interval = setInterval(() => {

      // if (currentComponent === "DisplayPictures")
      //   setBackgroundEffects(false);

      // if (pictureCounter+1 === pictures.length)
      //   setBackgroundEffects(true);

      setAnimationClass("slide-out-left");

      setTimeout(() => {

        switch(currentComponent) {
            case "DisplayDaily":
              setLastSchedule("DisplayDaily");
              setPictureCounter(pictureCounter+1);
              if (pictureCounter >= pictures.length)
                setPictureCounter(0);
              setCurrentComponent("DisplayPictures");
              break;
            case "DisplayWeekly":
              setLastSchedule("DisplayWEekly");
              setPictureCounter(pictureCounter+1);
              if (pictureCounter >= pictures.length)
                setPictureCounter(0);
              setCurrentComponent("DisplayPictures");
              break;
            case "DisplayPictures":
              if (lastSchedule == "DisplayDaily")
                setCurrentComponent("DisplayWeekly");
              else
                setCurrentComponent("DisplayDaily");
              break;
            default:
              setCurrentComponent("DisplayDaily");
        }

        // if (currentComponent !== "DisplayPictures")
        //   setBackgroundEffects(true);

        setAnimationClass("slide-in-right");

        }, 1800);
      }, timer*1000);

      console.log(pictureCounter);

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
        <main className="display-container" style={{ height: "100%" }}>
            <div className={`h-100 display-item ${animationClass}`}>
                {displayComponent}
            </div>
        </main>
    );
};

export default Display;
