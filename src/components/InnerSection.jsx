import React from "react";
import { motion } from "motion/react";
import Rightbar from "./Rightbar";
import MainContent from "./MainContent";
const InnerSection = () => {
  return (
    <div className="flex justify-between h-full ">
      <div className="w-[92%] h-full">
        <MainContent />
      </div>
      <div className="w-[8%] ">
        <Rightbar />
      </div>
    </div>
  );
};

export default InnerSection;
