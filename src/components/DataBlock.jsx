import React from "react";
import { motion } from "motion/react";
const DataBlock = ({ data }) => {
  return (
    <motion.div className="flex gap-5">
      {data.map((data, index) => (
        <motion.div
          className="w-1/3  shadow-sm rounded-xl p-3 cursor-pointer select-none"
          key={index}
          whileHover={{
            scale: 0.96,
            boxShadow:
              "inset 1px 1px 3px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(255,255,255,0.8)",
          }}
        >
          <div className="flex justify-between items-center">
            <img
              src={data.icon}
              alt=""
              className="h-5 opacity-90 select-none"
            />
            <h1>{data.name}</h1>
            <img
              src="https://img.icons8.com/?size=100&id=16252&format=png&color=000000"
              alt=""
              className="h-5 opacity-90 cursor-pointer select-none"
            />
          </div>
          <div className="w-full h-full  ">
            <div className="flex items-center justify-center h-32  w-[95%] rounded-lg m-2 shadow-neumoin">
              <img
                src={data.icon}
                alt=""
                className="h-12 opacity-85 select-none"
              />
            </div>
            <div className="mt-4 flex gap-2 justify-between items-center">
              <img
                src="https://i.ibb.co/YPmdqr0/Group-59.png"
                alt=""
                className="h-5 opacity-75"
              />

              <h1 className="text-gray-500 font-semibold text-sm">
                Jan 21, 2025
              </h1>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DataBlock;
