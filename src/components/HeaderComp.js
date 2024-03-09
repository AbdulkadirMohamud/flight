import React from "react";
import cairojpg from "../assets/Cairo.jpg";
import { ButtonYellowComp } from "./ButtonYellowComp";
import { FlightBookingComp, FlightBookingFormComp } from "./FlightBookingFormComp";
import { HeaderNavComp } from "./HeaderNavComp";

export const HeaderComp = () => {
  return (
    <div
      className="w-full h-[80%] bg-red-300 bg-contain"
      style={{
        backgroundImage: `url("${cairojpg}")`,
      }}
    >
      <HeaderNavComp />
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
          <span className="text-white text-xl">Flying budget</span>
          <p className="text-yellow-400 text-5xl">Professional, Experienced</p>
          <p className="text-white text-sm"> 
            <span className="text-white text-sm">
              full services airplane offering{" "}
              <span className="text-yellow-400">reduce fares</span>
              <ButtonYellowComp label={"FIND FLIGHT"} extraStyle={"flex mt-5"} />
            </span>
          </p>
        </div>
        <div className="flex">
          <FlightBookingFormComp />
        </div>
      </div>
    </div>
  );
};
