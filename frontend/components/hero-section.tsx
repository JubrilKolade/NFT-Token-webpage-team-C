"use client";

import Coin1 from "../public/Rectangle 2.svg";
import Coin2 from "../public/Rectangle 3.svg";
import Coin3 from "../public/Rectangle 4.svg";
import Image from "next/image";
// import { WalletComponents } from "./wallet-components";
// import WalletModal from "./wallet-modal";
import { useState } from "react";

export const HeroSection = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="text-white">
      <p className="text-center text-2xl md:text-[34px] mb-20">
        A decentralized platform <br /> for creating, managing and trading
        tokenized bonds.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="relative lg:col-span-2 mb-72 md:mb-96 lg:mb-64">
          <div className="w-fit">
            <div className="group card cursor-pointer relative pt-1 w-fit">
              <div className="bg-primary h-32 w-32 md:h-[241px] md:w-[236px] mt-8 ms-8 group-hover:animate-spin"></div>
              <Image
                src={Coin1}
                alt="coin"
                height={241}
                width={236}
                className=" h-40 w-36 md:h-[241px] md:w-[236px] absolute top-0 animate-"
              />
            </div>
          </div>
          <div className="absolute top-24 left-24 md:top-40 md:left-48">
            <div className="group card cursor-pointer relative pt-1 w-fit">
              <div className="bg-primary h-32 w-32 md:h-[241px] md:w-[236px] mt-8 ms-8 group-hover:animate-spin"></div>
              <Image
                src={Coin2}
                alt="coin"
                height={241}
                width={236}
                className=" h-40 w-36 md:h-[241px] md:w-[236px] absolute top-0"
              />
            </div>
          </div>
          <div className="absolute top-52 left-52 md:top-80 md:left-96">
            <div className="group card cursor-pointer relative pt-1 w-fit">
              <div className="bg-primary h-32 w-32 md:h-[241px] md:w-[236px] mt-8 ms-8 group-hover:animate-spin"></div>
              <Image
                src={Coin3}
                alt="coin"
                height={241}
                width={236}
                className=" h-40 w-36 md:h-[241px] md:w-[236px] absolute top-0"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="text-center px-10 md:px-5 flex gap-3 flex-wrap lg:block justify-center lg:col-span-1 border border-primary text-[25px] md:text-[64px] font-[700] shadow-xl sha">
            <p className="text-primary hover:uppercase">Create</p>
            <p className="hover:underline">Your</p>
            <p className="text-primary hover:uppercase">meme</p>
            <p className="hover:underline">Token</p>
            <p className="text-primary hover:uppercase">Now</p>
          </div>
          <button
            onClick={openModal}
            className="rounded-tr-xl rounded-bl-xl py-2 h-full border border-[#0A355F] text-white rounded-sm font-main mt-5 bg-primary hover:bg-[#0A355F]"
          >
            Connect Wallet
          </button>
          {/* <WalletModal onClose={closeModal} isVisible={isModalVisible} /> */}
        </div>
      </div>
    </div>
  );
};
