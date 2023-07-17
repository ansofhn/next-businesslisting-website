import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import React from "react";

const home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Team />
      {/* <Footer /> */}
    </div>
  );
};

export default home;
