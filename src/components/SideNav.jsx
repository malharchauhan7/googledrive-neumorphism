import React from "react";
import { motion } from "motion/react";
import { title } from "motion/react-client";

const links1 = [
  {
    title: "Home",
    img:
      "https://img.icons8.com/?size=100&id=U5JRqX4RSgfj&format=png&color=000000",
  },
  {
    title: "My Drive",
    img: "https://img.icons8.com/?size=100&id=24008&format=png&color=000000",
  },
  {
    title: "Computers",
    img: "https://img.icons8.com/?size=100&id=60719&format=png&color=000000",
  },
];
const links2 = [
  {
    title: "Shared with me",
    img:
      "https://img.icons8.com/?size=100&id=DdqpK9uhAT13&format=png&color=000000",
  },
  {
    title: "Recent",
    img: "https://img.icons8.com/?size=100&id=82767&format=png&color=000000",
  },
  {
    title: "Starred",
    img: "https://img.icons8.com/?size=100&id=103&format=png&color=000000",
  },
];
const links3 = [
  {
    title: "Spam",
    img: "https://img.icons8.com/?size=100&id=94633&format=png&color=000000",
  },
  {
    title: "Trash",
    img:
      "https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=000000",
  },
  {
    title: "Storage",
    img: "https://img.icons8.com/?size=100&id=85919&format=png&color=000000",
  },
];

const SideNav = () => {
  return (
    <motion.div className="flex flex-col gap-5">
      <div>
        {links1.map((links, index) => (
          <motion.div
            className="flex gap-2 items-center rounded-md  cursor-pointer px-2 w-[90%] py-1 mb-1 pl-5 select-none"
            key={index}
            whileHover={{
              backgroundColor: "#C2E7FF",
              boxShadow: "1px 1px 5px #c5c5c5, -1px -1px 5px #ffffff",
            }}
            whileTap={{
              // scale: 0.98,
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img src={links.img} alt="" className="h-5 opacity-85" />
            <h1 className="font-semibold text-gray-700">{links.title}</h1>
          </motion.div>
        ))}
      </div>
      <div>
        {links2.map((links, index) => (
          <motion.div
            className="flex gap-2 items-center rounded-md  cursor-pointer px-2 w-[90%] py-1 mb-1 pl-5 select-none"
            key={index}
            whileHover={{
              backgroundColor: "#C2E7FF",
              boxShadow: "1px 1px 5px #c5c5c5, -1px -1px 5px #ffffff",
            }}
            whileTap={{
              // scale: 0.98,
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img src={links.img} alt="" className="h-5 opacity-85" />
            <h1 className="font-semibold text-gray-700">{links.title}</h1>
          </motion.div>
        ))}
      </div>
      <div>
        {links3.map((links, index) => (
          <motion.div
            className="flex gap-2 items-center rounded-md  cursor-pointer px-2 w-[90%] py-1 mb-1 pl-5 select-none"
            key={index}
            whileHover={{
              backgroundColor: "#C2E7FF",
              boxShadow: "1px 1px 5px #c5c5c5, -1px -1px 5px #ffffff",
            }}
            // bg-[#728AB7]
            whileTap={{
              // scale: 0.98,
              boxShadow:
                "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
            }}
          >
            <img src={links.img} alt="" className="h-5 opacity-85" />
            <h1 className="font-semibold text-gray-700">{links.title}</h1>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SideNav;
