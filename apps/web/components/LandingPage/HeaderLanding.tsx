"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "../ConnectWallet";
import GameModalSection from "./GameModalSection";

const navigation = [
  {
    id: 1,
    name: "Home",
    linkUrl: "/",
  },
  {
    id: 2,
    name: "Purchase",
    linkUrl: "/purchase",
  },
  {
    id: 3,
    name: "Dashboard",
    linkUrl: "/dashboard",
  },
];

const HeaderLanding = () => {
  const pathname = usePathname();
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center z-[999] bg-cNeutral-100">
        <div
          className={`flex flex-row justify-between items-center max-w-[90rem] grow text-cNeutral-900 py-[1.2rem] px-4`}
        >
          <div className="flex flex-row gap-8 items-center">
            <a href="/">
              <Image
                src={"/assets/navbar/soltice-logo.png"}
                alt={"Soltice Universe"}
                height={42}
                width={66}
              />
            </a>

            <div className="flex flex-wrap gap-4 items-center">
              {navigation.map((data, index) => {
                return (
                  <a
                    href={data.linkUrl}
                    key={index}
                    className={
                      (cn("font-[spacegrotesk]"),
                      `text-base ${
                        pathname === data.linkUrl ? "font-bold" : "font-normal"
                      } text-cNeutral-900 hover:font-bold duration-150`)
                    }
                  >
                    {data.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center">
            <ConnectWallet />

            <button
              onClick={() => setIsShowModal(!isShowModal)}
              className="font-[trispace] uppercase bg-cNeutral-900 rounded-lg px-4 py-2 text-cNeutral-100 font-bold duration-150 hover:opacity-50"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
      <GameModalSection showmodal={isShowModal} setShowModal={setIsShowModal} />
    </>
  );
};

export default HeaderLanding;
