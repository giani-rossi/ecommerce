import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    //return clearInterval(clock);
  }, []);

  return (
    <>
      <div className="digitalClock" style={{ color: "aliceblue" }}>
        {hour}
      </div>
    </>
  );
}
