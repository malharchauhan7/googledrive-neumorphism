import React from "react";
import DataBlock from "./DataBlock";

const data1 = [
  {
    name: "Example.png",
    icon:
      "https://img.icons8.com/?size=100&id=YkoWeFlfnEe0&format=png&color=000000",
  },
  {
    name: "Example.txt",
    icon: "https://img.icons8.com/?size=100&id=13395&format=png&color=000000",
  },
  {
    name: "Example.pdf",
    icon:
      "https://img.icons8.com/?size=100&id=aBrh3QHCPxYu&format=png&color=000000",
  },
  {
    name: "Example.docx",
    icon: "https://img.icons8.com/?size=100&id=13624&format=png&color=000000",
  },
];
const data2 = [
  {
    name: "Example.xlsx",
    icon: "https://img.icons8.com/?size=100&id=13425&format=png&color=000000",
  },
  {
    name: "Example.docx",
    icon: "https://img.icons8.com/?size=100&id=13624&format=png&color=000000",
  },
  {
    name: "Example.pdf",
    icon:
      "https://img.icons8.com/?size=100&id=aBrh3QHCPxYu&format=png&color=000000",
  },
  {
    name: "Example.png",
    icon:
      "https://img.icons8.com/?size=100&id=YkoWeFlfnEe0&format=png&color=000000",
  },
];

const Data = () => {
  return (
    <div className="h-full w-full p-1">
      <div className="h-full w-full flex flex-col gap-5">
        <DataBlock data={data1} />
        <DataBlock data={data2} />
        <DataBlock data={data1} />
      </div>
    </div>
  );
};

export default Data;
