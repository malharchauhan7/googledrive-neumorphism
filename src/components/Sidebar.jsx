import React from "react";
import NeumorphicButton from "./NeumorphicButton";
import SideNav from "./SideNav";
import SideProgress from "./SideProgress";
const Sidebar = () => {
  return (
    <div className="w-[15%]  flex flex-col gap-2 h-full ">
      <div className="my-2">
        <NeumorphicButton />
      </div>
      <div>
        <SideNav />
      </div>
      <div>
        <SideProgress />
      </div>
    </div>
  );
};

export default Sidebar;
