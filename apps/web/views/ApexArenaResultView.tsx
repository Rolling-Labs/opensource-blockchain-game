/* eslint-disable @next/next/no-img-element */
import React from "react";
import BannerStone from "@/public/assets/apex-arena/result-window/banner-stone.svg";
import { cn } from "@/lib/utils";
import { spacegrotesk, trispace } from "@/public/fonts";
import { useRouter } from "next/navigation";

const ApexArenaResultView = () => {
  const router = useRouter();

  return (
    <div className="max-w-[800px] max-h-[450px] flex flex-col items-center justify-center relative">
      <BannerStone className="w-full max-w-[800px] z-[1]" />
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] grow w-full">
        <h1
          className={
            (cn(trispace.className),
            "font-black text-[80px] timer-text text-[#f4e7e5] apex-arena")
          }
        >
          YOU WIN!
        </h1>

        <h1
          className={
            (cn(trispace.className),
            "font-black text-2xl timer-text text-[#f4e7e5] apex-arena-small uppercase")
          }
        >
          You&rsquo;ve Earned
        </h1>

        <h1
          className={
            (cn(spacegrotesk.className),
            "font-bold text-[48px] text-[#f4e7e5] apex-arena-med")
          }
        >
          {439.71} $TPT
        </h1>
      </div>
      <button
        // disabled={selectedID <= 0}
        onClick={() => router.push("/apex-arena")}
        //      ${ selectedID <= 0
        //     ? "grayscale cursor-not-allowed"
        //     : "opacit-100 hover:scale-105"
        // }
        className={`absolute -bottom-[7%] left-1/2 transform -translate-x-1/2  z-[999] duration-150`}
      >
        <img
          src={"/assets/apex-arena/play-again.png"}
          alt={"start"}
          height={300}
          width={300}
          className="w-full max-w-[250px]"
        />
      </button>
    </div>
  );
};

export default ApexArenaResultView;
