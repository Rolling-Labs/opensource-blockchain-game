/* eslint-disable @next/next/no-img-element */
"use client";
import { useSelectedSoltice } from "@/lib/store.ts/store";
import React from "react";
import { useRouter } from "next/navigation";

const ApexArenaButton = () => {
  const { selectedID, setSelectedID } = useSelectedSoltice((state) => state);
  const router = useRouter();

  return (
    <button
      disabled={selectedID <= 0}
      onClick={() => router.push("/apex-arena/battle")}
      className={`${
        selectedID <= 0
          ? "grayscale cursor-not-allowed"
          : "opacit-100 hover:scale-105"
      } absolute bottom-[6.5%] left-1/2 transform -translate-x-1/2  z-[999] duration-150`}
    >
      <img
        src={"/assets/apex-arena/start-image.png"}
        alt={"start"}
        height={300}
        width={300}
        className="w-full max-w-[250px]"
      />
    </button>
  );
};

export default ApexArenaButton;
