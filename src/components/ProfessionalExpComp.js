import React from "react";
import { ButtonYellowComp } from "./ButtonYellowComp";
import FlyImage from "../assets/fly.jpeg.jpg";

export const ProfessionalExpComp = () => {
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div className="grid grid-cols-2 gap-5">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px]"
            style={{
              backgroundImage: `url("${FlyImage}")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br />
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
            This is the booking site for cheap prices and it is affordable for
            everyone whom wants to spend time and discover the beautiful world
          </p>
          <p className="mt-5">
            This is the booking site for cheap prices and it is affordable for
            everyone whom wants to spend time and discover the beautiful world
          </p>
          <div className="flex">
            <ButtonYellowComp label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
