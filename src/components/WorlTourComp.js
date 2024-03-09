import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg.jpg";
import MapImage from "../assets/map.jpeg.jpg";

export const WorlTourComp = () => {
  return (
    <div className="h-[80%] px-20 py-10">
      <div>
        <p className="text-3xl mt-1 text-center">
          We will take you All over the world From<br />
          <span className="text-[#3781c5]">Here</span>
        </p>
        <div
          className="bg-contain w-full h-[900px]"
          style={{
            backgroundImage: `url("${MapImage}")`,
          }}
        ></div>
      </div>
    </div>
  );
};
