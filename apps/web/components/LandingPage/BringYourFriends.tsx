/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const BringYourFriends = () => {
  return (
    <div className="flex justify-center items-center py-[4rem]">
      <div className="flex flex-col items-center justify-center gap-16">
        <img
          src={"/assets/landing-page/bring-your-friends-image.png"}
          alt={"Selfie Soltice"}
          width={1000}
          height={1000}
          className="w-full"
        />

        <div className="flex flex-col items-center max-w-[611px] grow">
          <h1 className="text-cNeutral-100 text-2xl sm:text-[56px] leading-normal">
            Bring your friends
            <br />
            and get rewarded
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BringYourFriends;
