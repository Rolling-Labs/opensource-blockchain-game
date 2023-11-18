/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";
import SelectedSoltice from "@/public/assets/apex-arena/square-select.svg";
import { cn } from "@/lib/utils";
import { spacegrotesk } from "@/public/fonts";
import { useSelectedSoltice } from "@/lib/store.ts/store";

const soltice = [
  {
    id: 1,
    name: "sparky",
    imgUrl: "/assets/apex-arena/sparky.png",
    nameImg: "/assets/apex-arena/sparky-text.png",
  },
  {
    id: 2,
    name: "shadow",
    imgUrl: "/assets/apex-arena/shadow.png",
    nameImg: "/assets/apex-arena/shadow-text.png",
  },
  {
    id: 3,
    name: "frost",
    imgUrl: "/assets/apex-arena/frost.png",
    nameImg: "/assets/apex-arena/frost-text.png",
  },
  {
    id: 4,
    name: "nimbus",
    imgUrl: "/assets/apex-arena/nimbus.png",
    nameImg: "/assets/apex-arena/nimbus-text.png",
  },
  {
    id: 5,
    name: "zephyr",
    imgUrl: "/assets/apex-arena/zephyr.png",
    nameImg: "/assets/apex-arena/zephyr-text.png",
  },
  {
    id: 6,
    name: "monsta-x",
    imgUrl: "/assets/apex-arena/monsta-x.png",
    nameImg: "/assets/apex-arena/monsta-x-text.png",
  },
];

const ApexArenaCharacterView = () => {
  const [swiper, setSwiper] = React.useState<any>(null);

  const { selectedID, setSelectedID } = useSelectedSoltice((state) => state);

  const nexto = () => {
    swiper.slideNext();
  };
  const backto = () => {
    swiper.slidePrev();
  };

  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        loop
        modules={[Pagination, Navigation]}
        className=" relative w-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px]"
        onSwiper={(s) => {
          console.log("initialize swiper", s);
          setSwiper(s);
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {soltice.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="group relative flex flex-col items-center justify-center overflow-visible pt-2"
              onClick={() => setSelectedID(data.id)}
            >
              <div className="flex flex-col justify-center items-center relative">
                <Image
                  src={data.imgUrl}
                  alt={data.name}
                  height={300}
                  width={300}
                  className="w-full max-w-[300px] p-4 duration-300 relative z-[2] group-hover:scale-[1.01] group-hover:-translate-y-2"
                />
                <SelectedSoltice
                  className={`absolute top-[22.5%] left-1/2 transform -translate-x-1/2 -translate-y-[22.5%] z-[1] scale-125 ${
                    selectedID === data.id
                      ? "opacity-100 group-hover:scale-[1.3]"
                      : "opacity-0"
                  } duration-150`}
                />

                <Image
                  src={data.nameImg}
                  alt={data.name}
                  height={100}
                  width={100}
                  className="w-full max-w-[140px]"
                />

                <h1
                  className={
                    (cn("font-[spacegrotesk]"), "text-base text-cNeutral-100")
                  }
                >
                  Chance: 8%
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={nexto}
        className="p-1 bg-alice-white/5 rounded-full absolute top-1/2 -right-[5%] transform  -translate-y-1/2 z-[99]"
      >
        <Arrow />
      </button>
      <button
        onClick={backto}
        className="p-1 bg-alice-white/5 rounded-full absolute top-1/2 -left-[5%] transform rotate-180 -translate-y-1/2 z-[99]"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default ApexArenaCharacterView;
