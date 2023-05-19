import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
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
    </div>
  );
};

export default Navbar;
