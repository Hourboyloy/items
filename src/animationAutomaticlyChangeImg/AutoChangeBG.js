import React, { useEffect, useState } from "react";
import { data } from "./data";
function AutoChangeBG() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  console.log(currentIndex);
  const backgroundChange = {
    backgroundImage: `url(${data[currentIndex].photo})`, // image store in public term ach access beb ng ban.
    backgroundPosition: `center`,
    backgroundSize: "cover",
  };
  // console.log(data[1].photo);
  return (
    <div className="h-screen relative">
      <div style={backgroundChange} className=" h-full transition-all duration-75"></div>
      <div className=" absolute top-0 border h-full w-full ">
        <div className=" flex justify-center items-center w-full h-full border border-teal-500">
          <div className=" flex flex-col justify-center w-full h-full space-y-10">
            <div className=" flex justify-center items-center flex-col">
              <p className=" text-gray-100 text-xl tracking-wider">EDIBLE</p>
              <p className=" text-gray-200 text-md tracking-wider">
                V E C T O R T E X T E F F E C T
              </p>
            </div>
            <div className=" flex justify-center items-center flex-col space-y-1 font-serif">
              <h1 className=" text-blue-400 text-6xl font-bold">MOUNTAIN</h1>
              <h1 className=" text-yellow-300  text-6xl  font-bold">STORE</h1>
            </div>
            <div className=" flex justify-center items-center space-x-4 text-gray-100 text-3xl">
              <h3>T E X T</h3>
              <h3>E F F E C T</h3>
            </div>
            <div className=" flex justify-center items-center flex-col text-gray-100 ">
              <p className="">EASY TO USE & EDIT</p>
              <p>100 % USABLE EFFECT - EPS FILE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoChangeBG;
