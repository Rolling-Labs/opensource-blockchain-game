import React from "react";
import StoneBig from "@/public/assets/apex-arena/starting-window/stone-big.svg";
const ApexArenaView = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/assets/apex-arena/starting-window/apex-bg.png')] bg-no-repeat bg-cover bg-center h-[58.8rem] relative -z-[2]">
      {/* <div className=" h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1] bg-white" /> */}
      <div className="flex flex-col max-w-[75rem] grow items-center bg-white">
        <StoneBig />
      </div>
      <h1 className="text-white">asdasd</h1>
    </div>
  );
};

export default ApexArenaView;
