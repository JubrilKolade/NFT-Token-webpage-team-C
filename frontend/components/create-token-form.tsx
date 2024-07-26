"use client";

import Image from "next/image";
import React, { useState } from "react";
// import { useAccount } from "wagmi";
// import { Reclaim } from "@reclaimprotocol/js-sdk";
// import QRCode from "react-qr-code";

import ShibaBack from "../public/shiba-back.svg";
import Shiba from "../public/shiba.svg";
import ShibaCoin from "../public/shiba-coin.svg";
import Pepe from "../public/pepe.svg";

const CreateTokenForm = () => {
//   const { address } = useAccount();
  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // if (address) {
    //   alert("form submited");
    // } else {
    //   alert("Connect Wallet");
    // }
  };

  return (
    <div className="relative">
      <Image
        src={Shiba}
        alt="coin"
        height={170}
        width={170}
        className="absolute h-[85px] w-[85px] md:h-[170px] md:w-[170px] top-24 md:top-20 lg:left-48 z-10 animate-pulse"
      />
      <Image
        src={Pepe}
        alt="coin"
        height={50}
        width={50}
        className="absolute h-10 w-10 md:w-[50px] md:h-[50px] top-80 right-0 md:right-10 lg:right-16 xl:right-72 z-30 animate-pulse"
      />
      <Image
        src={Pepe}
        alt="coin"
        height={170}
        width={170}
        className="absolute h-[85px] w-[85px] md:h-[170px] md:w-[170px] bottom-1 md:bottom-5 right-0 lg:right-48 z-30 animate-pulse"
      />

      <div className="absolute top-32 border border-primary h-[500px] mx-auto left-0 right-0 w-full max-w-[1100px]"></div>

      <div className="mx-auto max-w-[1000px] p-5 md:p-10 ">
        <h1 className="text-primary text-3xl font-bold p-3 mb-12 border border-white w-fit">
          Create Your Token
        </h1>
        <form
          className="flex flex-col gap-10 items-center px-5 py-10 md:py-20 md:p-20 bg-gradient-to-t from-[#309bff] to-[#309bff8c] relative z-20"
          onSubmit={handleSubmit}
        >
          <Image
            src={ShibaBack}
            alt="coin"
            height={450}
            width={450}
            className="absolute m-auto top-20 bottom-20 opacity-25"
          />

          <Image
            src={ShibaCoin}
            alt="coin"
            height={111}
            width={111}
            className="absolute h-[80px] w-[80px] md:h-[111px] md:w-[111px] top-0 right-0"
          />
          <div className="grid grid-cols-5 md:grid-cols-4 gap-5">
            <div className="col-span-3 flex flex-col gap-2">
              <label className="font-bold text-sm">Name:</label>
              <input
                type="text"
                name="tokenName"
                placeholder="Name your Meme Token"
                required
                className="p-3 text-xs md:text-sm lg:text-lg placeholder:text-primary border border-white rounded-tr-xl rounded-bl-xl text-white bg-[#0A1640] outline-none"
              />
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
              <label className="font-bold text-sm">Symbol:</label>
              <input
                type="text"
                name="symbol"
                placeholder="Token Symbool"
                required
                className="p-3 text-xs md:text-sm lg:text-lg placeholder:text-primary border border-white rounded-tr-xl rounded-bl-xl text-white bg-[#0A1640] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-bold text-sm">Description</label>
            <textarea
              placeholder="Briefly describe your Meme Token"
              name="description"
              rows={5}
              required
              className="p-3 text-xs md:text-sm lg:text-lg placeholder:text-primary border border-white rounded-tr-xl rounded-bl-xl text-white bg-[#0A1640] max-h-52 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 justify-between w-full h-fit">
            <div className="flex gap-4 col-span-3">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Image</label>
                <input
                  type="file"
                  name="image"
                  placeholder="Image"
                  required
                  className="w-full h-full p-3 text-xs md:text-sm lg:text-lg rounded-md text-white bg-[#0A1640] outline-none cursor-pointer"
                />
              </div>
              <div className="border border-white hidden md:block"></div>
            </div>
            <div className="social col-span-3 grid gap-2">
              <label className="font-bold text-sm">
                Links <span className="text-[#0A1640]">( Optional )</span>
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="telegram"
                  placeholder="Telegram"
                  className="p-3 text-xs md:text-sm lg:text-lg border border-[#0A1640] placeholder:text-[#0A1640] rounded-md bg-inherit outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  className="p-3 text-xs md:text-sm lg:text-lg border placeholder:text-[#0A1640] boder-[#0A1640] rounded-md bg-inherit outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <input
              type="submit"
              value="Create Token"
              className="rounded-tr-xl rounded-bl-xl p-2 md:p-4 font-bold cursor-pointer bg-[#0A1640]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTokenForm;
