import React from "react";
import { motion } from "motion/react";
import Data from "./Data";
const MainContent = () => {
  return (
    <div className="px-8">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-gray-900 font-normal">Welcome to Drive</h1>
        <img
          className="h-6 opacity-85 cursor-pointer select-none"
          src="https://img.icons8.com/?size=100&id=82742&format=png&color=000000"
          alt=""
        />
      </div>
      <div className="flex  w-full justify-between items-center mt-4 mb-3 select-none">
        <div className="flex w-20 shadow-neumo h-10 items-center justify-center rounded-2xl overflow-hidden">
          <motion.div
            className="w-[50%] h-full overflow-hidden items-center flex justify-center cursor-pointer"
            whileTap={{
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=82790&format=png&color=000000"
              alt=""
              className="h-6 opacity-85 "
            />
          </motion.div>
          <motion.div
            className="w-[50%] h-full overflow-hidden items-center flex justify-center bg-[#C2E7FF] cursor-pointer"
            whileTap={{
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=82795&format=png&color=000000"
              alt=""
              className="h-6 opacity-85"
            />
          </motion.div>
        </div>
        <div className="flex w-20 shadow-neumo h-10 items-center justify-center  rounded-2xl overflow-hidden">
          <motion.div
            className="w-[50%] h-full overflow-hidden items-center flex justify-center cursor-pointer"
            whileTap={{
              // scale: 0.98,
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=83186&format=png&color=000000"
              alt=""
              className="h-6 opacity-85"
            />
          </motion.div>
          <motion.div
            className="w-[50%] h-full overflow-hidden items-center flex justify-center bg-[#C2E7FF] cursor-pointer"
            whileTap={{
              // scale: 0.98,
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=115909&format=png&color=000000"
              alt=""
              className="h-6 opacity-85"
            />
          </motion.div>
        </div>
      </div>
      <div className="">
        <Data />
      </div>
    </div>
  );
};

export default MainContent;
