import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div>
      <div className="py-32 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-1/2">
            <div className="flex">
              <div>
                <Image
                  src={""}
                  className="object-cover w-48 rounded-md shadow-md h-60"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black via-transparent"></div>
                <div>
                  <p className="font-semibold">Fate Foo</p>
                  <p>CEO</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;
