import {format} from "date-fns";
import "../scss/DisplayLocalDateTime.scss";
import {useState} from "react";
import {useEffect} from "react";

const init = {
  time: format(new Date(), "hh : mm : s"),
  date: format(new Date(), "EEEE, d, MMMM yyyy"),
};

const DisplayLocalDateTime = () => {
  const [dateTime, setDateTime] = useState({...init});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date(); // Creates a Date object in the local time zone
      const utcDate = new Date(date.toISOString()); // Converts to UTC

      setDateTime({
        time: format(utcDate, "hh : mm : ss", {timeZone: "UTC"}),
        date: format(utcDate, "EEEE, d, MMMM yyyy", {timeZone: "UTC"}),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dldt">
      <div className="clock">
        <h1>Display Local Date & Time</h1>
        <div>
          <h2 className="time">{dateTime.time}</h2>
          <h3>{dateTime.date}</h3>
        </div>
        <p>Showing 24 hour format</p>
        <p>UTC - Coordinated</p>
      </div>
    </div>
  );
};

export default DisplayLocalDateTime;
