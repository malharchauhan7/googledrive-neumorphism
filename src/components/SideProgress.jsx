import React from "react";
import { motion } from "motion/react";
const SideProgress = () => {
  return (
    <motion.div>
      <div className="w-full h-6 bg-gray-100 shadow-neumo flex justify-center items-center rounded-full">
        <div class="w-[97%]  rounded-full h-4 shadow-neumoin p-[2%] flex items-center">
          <div class="bg-[#728AB7] h-[12px] rounded-full shadow-neumo w-3/5 "></div>
        </div>
      </div>
      <div className="mx-3 my-1 text-gray-700 font-semibold">
        <h1>7.5 Gb of 15 Gb used</h1>
      </div>
      <div className="w-[80%] h-10 bg-gray-100 shadow-neumo flex justify-center items-center rounded-2xl my-3 ml-4 cursor-pointer select-none">
        <motion.div
          class="w-[97%]  rounded-xl h-8 shadow-neumoin p-[2%] flex items-center justify-center font-semibold text-slate-600"
          whileTap={{ backgroundColor: "#728AB7", color: "white" }}
        >
          Get more Storage
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SideProgress;
