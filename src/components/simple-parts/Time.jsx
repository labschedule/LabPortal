import React, { useState, useEffect } from "react";

const Time = () => {
  const formatTime = () => {
    const date = new Date();
    let hour = date.getHours().toString().padStart(2, "0");
    let min = date.getMinutes().toString().padStart(2, "0");
    return `${hour} : ${min}`;
  };

  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {time}
    </div>
  );
};

export default Time;
