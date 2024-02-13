import { useEffect, useState } from "react";
import PropTypes from "prop-types";



const CountDown = ({RegisterClick}) => {

const [countDownTime, setCountDownTime] = useState({
  hours: "00",
  minutes: "00",
  seconds: "00",
});

useEffect(() => {
  const startCountDown = () => {
    const customDate = new Date();
    const countDownDate = new Date(customDate.getTime() + 10 * 60 * 60 * 1000); // Adding 10 hours in milliseconds

    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = countDownDate - currentTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountDownTime({
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });

      if (timeDifference <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  };

  const timer = setTimeout(startCountDown, 3000);

  return () => clearTimeout(timer);
}, []);

  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-[#a3b697]">
      <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
        <div className="flex flex-col gap-2">
          <h1 className="text-center font-sans sm:text-4xl text-xl font-semibold leading-8 text-[#f9cd14]">
            Hurry, Limited Availability
          </h1>
          <span className="text-md font-semibold text-center leading-8 text-[#fad94b]">
            Register Now and get 10% discount on all Consultations
          </span>
        </div>
        <div className="flex justify-between sm:px-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime.hours}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime.minutes}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime.seconds}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Seconds</span>
          </div>
        </div>
        <div className="flex flex-nowrap flex-shrink-0 justify-center items-center">
          <a href="#" className="text-center w-1/2 px-4 py-2 bg-[#f9d22c] rounded-lg font-sans font-semibold text-white text-2xl hover:bg-[#cea805] transition-all ease-in-out shadow-md hover:cursor-pointer " onClick={RegisterClick}>Register Now</a>
        </div>
      </div>
    </div>
  );
};
CountDown.propTypes = {
  RegisterClick: PropTypes.func,
 
};
export default CountDown;
