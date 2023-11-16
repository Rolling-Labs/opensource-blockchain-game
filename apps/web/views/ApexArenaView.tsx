import React from "react";
import StoneBig from "@/public/assets/apex-arena/starting-window/stone-big.svg";
import { cn } from "@/lib/utils";
import { spacegrotesk, trispace } from "@/public/fonts";
import ApexArena from "@/public/assets/title/apex-arena-title.svg";
import Image from "next/image";

const ApexArenaView = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/assets/apex-arena/starting-window/apex-bg.png')] bg-no-repeat bg-cover bg-center h-[58.8rem] relative -z-[3]">
      <div className=" h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[2] bg-cNeutral-950/50 backdrop-blur" />
      <div className="flex flex-col max-w-[75rem] grow items-center justify-center relative ">
        <StoneBig className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1] w-full max-w-[70rem]" />
        <div className="flex flex-col max-w-[50rem] grow w-full">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              height={400}
              width={400}
              className="w-full"
              src={"/assets/title/apex-arena-title-v2.png"}
              alt={"apex-arena"}
            />
            <ApexArena />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApexArenaView;
