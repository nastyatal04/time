import React, { useEffect, useState } from "react";
import moment from "moment";
import "./MyTime.css";

export const MyTime = () => {
  const [time, setTime] = useState(moment());
  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => clearInterval(intervalTime);
  }, []);

  return <div className="time">{time.format("H:mm:ss")}</div>;
};
