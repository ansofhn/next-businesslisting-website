import Image from "next/image";
import React from "react";
import team1 from "../public/assets/images/1.svg";
import team2 from "../public/assets/images/2.svg";
import team3 from "../public/assets/images/3.svg";
import team4 from "../public/assets/images/4.svg";

const Team = () => {
  return (
    <div>
      <div className="py-32 bg-gray-50 relative">
        <div className="w-8/12 mx-auto">
          <div className="flex items-center gap-20">
            <div className="w-1/2">
              <div className="food w-1/2 h-full absolute top-0 left-0 buttom-0 opacity-30"></div>
              <div className="w-1/2 bg-gradient-to-l from-gray-50 via-transparent absolute top-0 left-0 bottom-0 h-full"></div>
              <div className="flex gap-12">
                <div className="flex flex-col gap-12">
                  <div className="relative">
                    <Image
                      src={team1}
                      className="object-cover w-48 rounded-md shadow-md h-60 bg-amber-200"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/70 via-transparent"></div>
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo</p>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={team2}
                      className="object-cover w-48 rounded-md shadow-md h-60 bg-amber-200"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/70 via-transparent"></div>
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo</p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-12 mt-12">
                  <div className="relative">
                    <Image
                      src={team3}
                      className="object-cover w-48 rounded-md shadow-md h-60 bg-amber-200"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/70 via-transparent"></div>
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo</p>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={team4}
                      className="object-cover w-48 rounded-md shadow-md h-60 bg-amber-200"
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/70 via-transparent"></div>
                    <div className="absolute bottom-2 left-3 text-white text-sm">
                      <p className="font-semibold">Fate Foo</p>
                      <p>CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-sm font-bold uppercase text-amber-500 mb-1">
                Our Support Heroes
              </p>
              <p className="text-4xl font-bold text-gray-600">Meet The Team</p>
              <p className="mt-3 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="space-x-2">
                <button className="mt-4 py-2 px-4 border-2 border-gray-500 font-semibold text-gray-500 shadow-md hover:bg-gray-500 hover:text-white rounded-md">
                  Meet Us
                </button>
                <button className="mt-4 py-2 px-4 border-2 border-amber-500 font-semibold text-amber-500 shadow-md hover:bg-amber-500 hover:text-white rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
