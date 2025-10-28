import React, { useState, useEffect } from "react";
import { Spotlight  } from "./Spotlight.jsx";
import { SparklesCore } from './Sparkles';
import SparklesBackground from "./SparklesBackground.jsx";


function DaysCounter() {
  const startDate = new Date("2024-03-28T00:00:00"); // Your start date
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  function calculateTimeElapsed() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  return (
    <>
     <Spotlight 
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <p className="text-2xl lg:text-4xl font-bold mb-4 uppercase mogra select-none text-[#fff]">
        We've been together for
      </p>

      <div>
        <p className="text-lg lg:text-2xl font-semibold mogra select-none text-[#A684FF]">
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.years}</span>YEAR{timeElapsed.years !== 1 && "S"},
          </span>
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.months}</span>MONTH{timeElapsed.months !== 1 && "S"},
          </span>
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.days}</span>DAY{timeElapsed.days !== 1 && "S"}
          </span>
        </p>

        <p className="text-lg lg:text-2xl font-semibold mogra select-none text-[#A684FF] mt-2">
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.hours}</span>HOUR{timeElapsed.hours !== 1 && "S"},
          </span>
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.minutes}</span>MINUTE{timeElapsed.minutes !== 1 && "S"},
          </span>
          <span className="mr-2">
            <span className="mr-1">{timeElapsed.seconds}</span>SECOND{timeElapsed.seconds !== 1 && "S"}
          </span>
        </p>
      </div>

      <SparklesBackground />
    </>
  );
}

export default DaysCounter;
