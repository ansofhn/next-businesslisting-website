import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import asset1 from "../public/assets/images/burgerhouse.jpg";
import asset2 from "../public/assets/images/traditionalfood.jpg";
import asset3 from "../public/assets/images/coupledinner.jpg";
import asset4 from "../public/assets/images/bestlounge.jpg";
import asset5 from "../public/assets/images/fruitclinic.jpg";
import asset6 from "../public/assets/images/coffeeshop.jpg";

const Category = () => {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="w-9/12 mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-3 text-4xl font-bold text-gray-600">
              Popular Places
            </p>
            <p className="text-gray-600">Discover Most Searched Places</p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-6 mx-auto">
              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset1} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    Mr. Burger House
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Jakarta, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      burger
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      restaurant
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset2} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    Indonesia Traditional Food
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Bogor, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      eat
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      restaurant
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset3} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    Couples Dinner
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Bali, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      dinner
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      cafe
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset4} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    The Best Lounge
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Jakarta, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      cafe
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      restaurant
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset5} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    Fruit Clinic
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Bandung, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      fruit
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      clinic
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-xl overflow-hidden bg-white rounded-md shadow">
                <div className="h-48 overflow-hidden">
                  <Image src={asset6} className="object-cover w-full" />
                </div>
                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center text-sm"></div>
                  <div className="text-lg font-bold text-gray-600">
                    Coffee Shop
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MdLocationOn />
                    Bandung, Indonesia
                  </div>
                  <div className="space-x-1">
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      coffee
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      cafe
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full">
                      $$
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
