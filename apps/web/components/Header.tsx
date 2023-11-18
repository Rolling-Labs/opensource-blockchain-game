"use client";
import React from "react";
import Image from "next/image";
import { ConnectWallet } from "./ConnectWallet";
import { cn } from "@/lib/utils";
import { spacegrotesk } from "@/public/fonts";
import { usePathname } from "next/navigation";

const navigation = [
  {
    id: 1,
    name: "Apex Arena",
    linkUrl: "/apex-arena",
  },
  {
    id: 2,
    name: "Equinox Circuit",
    linkUrl: "/",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-full flex justify-center items-center z-[999]">
      <div className="flex flex-row justify-between items-center max-w-[90rem] grow text-cNeutral-100 px-4 py-[2rem]">
        <div className="flex flex-row gap-8 items-center">
          <Image
            src={"/assets/navbar/soltice-logo.png"}
            alt={"Soltice Universe"}
            height={42}
            width={66}
          />

          <div className="flex flex-wrap gap-4 items-center">
            {navigation.map((data, index) => {
              return (
                <a
                  href={data.linkUrl}
                  key={index}
                  className={
                    (cn(spacegrotesk.className),
                    `text-base ${
                      pathname === data.linkUrl ? "font-bold" : "font-normal"
                    } text-[#fff]`)
                  }
                >
                  {data.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/navbar/energy-icon.png"}
              alt={"Time Potion"}
              height={32}
              width={24}
            />

            <div className="flex flex-col">
              <h1
                className={
                  (cn(spacegrotesk.className), "text-xs font-medium uppercase")
                }
              >
                Time Potion
              </h1>
              <h1
                className={
                  (cn(spacegrotesk.className), "text-base font-bold uppercase")
                }
              >
                431,967.82
              </h1>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Image
              src={"/assets/navbar/energy-icon.png"}
              alt={"Time Potion"}
              height={32}
              width={24}
            />

            <div className="flex flex-col">
              <h1
                className={
                  (cn(spacegrotesk.className), "text-xs font-medium uppercase")
                }
              >
                Energy
              </h1>
              <h1
                className={
                  (cn(spacegrotesk.className), "text-base font-bold uppercase")
                }
              >
                4/10
              </h1>
            </div>
          </div>

          <div className="flex flex-col">
            <h1
              className={
                (cn(spacegrotesk.className), "text-xs font-medium uppercase")
              }
            >
              Resets in
            </h1>
            <h1 className={(cn(spacegrotesk.className), "text-base font-bold")}>
              8hrs:5min
            </h1>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
