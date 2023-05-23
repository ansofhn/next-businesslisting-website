import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="py-10 bg-white border-t">
        <div className="w-8/12 mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="mb-2 font-bold text-gray-600 uppercase">Company</p>
              <ul>
                <li className="text-gray-600">Who We Are</li>
                <li className="text-gray-600">Contact Us</li>
                <li className="text-gray-600">Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
