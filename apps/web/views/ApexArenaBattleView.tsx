"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelectedSoltice, useShowResult } from "@/lib/store.ts/store";
import BlueGlow from "@/public/assets/apex-arena/battle/blue-glow.svg";
import RedGlow from "@/public/assets/apex-arena/battle/red-glow.svg";
import Image from "next/image";

import Lottie from "react-lottie";
import animData from "@/public/assets/apex-arena/fighting-window/sword-fighting.json";
import { cn } from "@/lib/utils";
import { trispace } from "@/public/fonts";
import ApexArenaResultView from "./ApexArenaResultView";

const ApexArenaBattleView = () => {
  const { selectedID } = useSelectedSoltice((state) => state);
  const [time, setTime] = useState<any>(3);
  const { showResult, setShowResult } = useShowResult((state) => state);

  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (selectedID <= 0) {
      router.push("/apex-arena");
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedID, time]);
  return (
    <>
      <div className="flex lg:hidden justify-center items-center bg-[url('/assets/apex-arena/countdown-window/apex-game-bg.png')] bg-no-repeat bg-cover bg-center h-[58.8rem] relative">
        <div className="h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] bg-cNeutral-950/50 backdrop-blur" />

        <h1 className="relative z-[2] text-cNeutral-100 font-[switzer]">
          Only Available on PC{" "}
        </h1>
      </div>
      {time <= 0 && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-cNeutral-950/50 backdrop-blur">
          {showResult ? (
            // Create Result Component
            <>
              <ApexArenaResultView />
            </>
          ) : (
            <Lottie
              options={defaultOptions}
              height={600}
              width={600}
              isClickToPauseDisabled={true}
            />
          )}
        </div>
      )}

      <div className="hidden lg:flex justify-center items-center relative -z-[1]">
        <div className="relative flex flex-row justify-between grow items-end bg-[url('/assets/apex-arena/countdown-window/apex-game-bg.png')] bg-no-repeat bg-cover bg-bottom h-screen max-h-[58.8rem] max-w-[1920px] z-[2] pb-[22rem] pl-[12rem] pr-[8rem]">
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%]">
            {time >= 0 && (
              <h1
                className={
                  (cn(trispace.className),
                  "font-bold text-[192px] timer-text text-cNeutral-100 apex-arena")
                }
              >
                {time}
              </h1>
            )}
          </div>

          <div className="flex justify-center items-center relative max-w-[300px] max-h-[300px] h-full w-full">
            <Image
              src={"/assets/apex-arena/sparky-battle.png"}
              alt={"sparky"}
              height={500}
              width={500}
              className="w-full max-w-[500px] z-[2] floating pb-[3rem]"
            />
            <BlueGlow className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]" />
          </div>
          <div className="flex justify-center items-center relative max-w-[300px] max-h-[300px] h-full w-full">
            <Image
              src={"/assets/apex-arena/sparky-enemy.png"}
              alt={"sparky-enemy"}
              height={500}
              width={500}
              className="w-full max-w-[500px] z-[2] reverse-floating pb-[3rem]"
            />
            <RedGlow className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApexArenaBattleView;
