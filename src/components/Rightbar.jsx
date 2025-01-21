import React from "react";
import { motion } from "motion/react";
const Rightbar = () => {
  return (
    <motion.div className="h-full flex justify-end items-start select-none">
      <div className="w-[80%]  h-[85%] rounded-lg shadow-neumo  items-center flex flex-col justify-start gap-5 pt-5">
        <motion.img
          src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_21_2x.png"
          alt=""
          className="h-12 my-1 cursor-pointer"
          whileHover={{ scale: 1.04 }}
        />
        <motion.img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          className="h-12 my-1 cursor-pointer"
          whileHover={{ scale: 1.04 }}
        />
        <motion.img
          src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
          alt=""
          className="h-12 my-1 cursor-pointer"
          whileHover={{ scale: 1.04 }}
        />
        <motion.img
          src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
          alt=""
          className="h-12 my-1 cursor-pointer"
          whileHover={{ scale: 1.04 }}
        />
        <motion.div
          className="shadow-neumo w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          whileTap={{
            scale: 1.02,
            boxShadow:
              "inset 1px 1px 3px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(255,255,255,0.8)",
          }}
        >
          <span className="flex items-center text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
        </motion.div>
        <motion.div
          className="mt-28 cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=60&format=png&color=000000"
            alt=""
            className="h-8 opacity-85"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Rightbar;
