import React from "react";
import hero from "../public/assets/images/hero/banner_3.jpg";
import Image from "next/image";
import {
  MdSearch,
  MdRestaurant,
  MdLocalCafe,
  MdLocalHospital,
  MdSchool,
  MdShoppingCart,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="absolute left-0 right-0 z-10">
        <div className="flex items-center justify-between w-9/12 py-5 mx-auto">
          <div>
            <a href="#" className="text-lg">
              Tail Listing
            </a>
          </div>
          <div>
            <button className="px-4 py-2 transition-all bg-transparent border rounded-md text-amber-500 hover:bg-amber-500 hover:text-white border-amber-500">
              Add Listing
            </button>
          </div>
          <div className="space-x-4">
            <button className="text-lg">Sign In</button>
            <button className="text-lg">Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="relative h-screen">
        <Image src={hero} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 w-full h-full">
          <div className="flex items-center justify-center w-full min-h-full">
            <div className="space-y-6">
              <div className="mb-4 text-center text-white">
                <p className="mb-4 text-4xl font-bold capitalize">
                  Discover places that people love
                </p>
                <p className="text-lg">
                  We will help you to find the best places in the World.
                </p>
              </div>
              <div className="flex gap-5 mb-5">
                <div>
                  <input
                    type="text"
                    placeholder="location"
                    className="px-4 py-3 text-gray-600 bg-white rounded-md w-80 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="I'm Looking for..."
                    className="px-4 py-3 text-gray-600 bg-white rounded-md w-80 focus:outline-none"
                  />
                </div>
                <div>
                  <button className="flex items-center gap-2 rounded-md py-2.5 px-6 bg-amber-500 text-lg text-white hover:bg-amber-600">
                    <MdSearch className="text-xl" />
                    Search
                  </button>
                </div>
              </div>
              <div>
                <ul className="flex justify-center gap-5 text-sm text-white">
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <MdRestaurant className="hidden mr-2 align-middle md:inline-flex" />
                      Restaurants
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <MdLocalCafe className="hidden mr-2 align-middle md:inline-flex" />
                      Cafe
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <CgGym className="hidden mr-2 align-middle md:inline-flex" />
                      Gym
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <MdLocalHospital className="hidden mr-2 align-middle md:inline-flex" />
                      Hospital
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <MdSchool className="hidden mr-2 align-middle md:inline-flex" />
                      School
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link href={"#"} className="hover:text-amber-500">
                      <MdShoppingCart className="hidden mr-2 align-middle md:inline-flex" />
                      Shopping
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
