import React from "react";
import NeumorphicButton from "../components/NeumorphicButton";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InnerSection from "../components/InnerSection";
import Rightbar from "../components/Rightbar";
const Home = () => {
  return (
    <div className="bg-[#F0F0F3] shadow-lg  rounded-2xl h-[90%] w-[80%] p-12 overflow-hidden">
      <Header />
      <div className=" h-full flex ">
        <Sidebar />
        <div className=" w-[90%] ml-6 mt-8">
          <InnerSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
