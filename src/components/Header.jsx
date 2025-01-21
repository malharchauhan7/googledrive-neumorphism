import React from "react";
import { motion } from "motion/react";
const Header = () => {
  return (
    <motion.div className="w-full flex justify-between ">
      <div className="flex justify-center items-center ">
        <img
          className="h-12"
          src="https://img.icons8.com/?size=100&id=ya4CrqO7PgnY&format=png&color=000000"
          alt=""
        />
        <h1 className="text-gray-700 font-semibold text-2xl mt-1 mx-2">
          Drive
        </h1>
      </div>
      {/* bg-[#F0F0F3] */}
      <div className=" h-12 w-[40%] items-center justify-center flex rounded-lg  select-none shadow-neumo overflow-hidden">
        <input
          type="text"
          className="bg-[#F0F0F3] focus:outline-none focus:ring-0 text-gray-600 font-semibold text-lg w-[80%] h-full px-4"
        />
        <motion.div
          className="w-[10%] h-full flex justify-center items-center cursor-pointer"
          whileTap={{
            boxShadow:
              "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
          }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=61035&format=png&color=000000"
            alt=""
            className="h-8 opacity-85 "
          />
        </motion.div>
        <motion.div
          className="w-[10%] bg-[#C2E7FF] h-full flex justify-center items-center cursor-pointer"
          whileTap={{
            boxShadow:
              "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
          }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
            alt=""
            className="h-8 opacity-85"
          />
        </motion.div>
      </div>
      <motion.div className="flex  justify-center items-center gap-7 ">
        <img
          src="https://img.icons8.com/?size=100&id=83244&format=png&color=000000"
          alt=""
          className="h-9 opacity-85 rounded-full cursor-pointer select-none"
        />
        <img
          src="https://img.icons8.com/?size=100&id=82535&format=png&color=000000"
          alt=""
          className="h-9 opacity-85 rounded-full cursor-pointer select-none"
        />
        <img
          src="https://img.icons8.com/?size=100&id=i5awsrw7V2Qr&format=png&color=000000"
          alt=""
          className="h-9 opacity-85 rounded-full cursor-pointer select-none"
        />
        <motion.img
          src="https://i.ibb.co/YPmdqr0/Group-59.png"
          alt=""
          className="h-11 opacity-85 shadow-neumo rounded-full cursor-pointer select-none"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
            boxShadow:
              "inset 4px 4px 6px rgba(0,0,0,0.2), inset -4px -4px 6px rgba(255,255,255,0.7)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
