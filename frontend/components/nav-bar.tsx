"use client";
import React, { useState } from "react";
// import WalletModal from "./wallet-modal";
// import { WalletComponents } from "./wallet-components";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <div className="mx-[80px] max-lg:mx-5">
        <div className="flex items-center justify-between py-5 text-white">
          <Link href={"/"}>
            <h1 className="font-main text-primary text-4xl max-sm:text-2xl">
              Bond
              <span className="text-white text-5xl font-bold max-sm:text-3xl">
                X
              </span>
            </h1>
          </Link>
          <ul className="flex items-center text-slate-300 text-xl max-lg:hidden">
            <li className="hover:text-primary p-2 hover:border border-white">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-primary p-2 hover:border border-white">
              <a href="/token">Create Token</a>
            </li>
            <li className="hover:text-primary p-2 hover:border border-white">
              <a href="/trade">Trade</a>
            </li>
            <li className="hover:text-primary p-2 hover:border border-white">
              <a href="/swap">Swap</a>
            </li>
            <li className="hover:text-primary p-2 hover:border border-white">
              <a href="/shill">Shill</a>
            </li>
          </ul>
            <button
              onClick={openModal}
              className="rounded-tr-xl rounded-bl-xl py-2 px-8 border border-[#0A355F] hidden md:block text-white rounded-sm font-main mt-5 bg-primary hover:bg-[#0A355F]"
            >
              Connect Wallet
            </button>
          {/* <WalletModal onClose={closeModal} isVisible={isModalVisible} /> */}

          <MenuIcon
            size={30}
            className="lg:hidden cursor-pointer z-40"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`transition-all duration-300  absolute top-0 left-0 z-50 bg-primary h-full w-[80%] pt-5 px-2  ${
            isOpen ? "lg:hidden block animate-slideIn" : "animate-slideOut"
          }`}
        >
          <Link href={"/"}>
            <h1 className="font-main text-4xl max-sm:text-2xl">
              Bond
              <span className="text-white text-5xl font-bold max-sm:text-3xl">
                X
              </span>
            </h1>
          </Link>
          <ul className="text-white font-main tracking-wider ">
            <li className="hover:text-white mt-8 hover:bg-[#0A355F] p-3">
              <Link className="py-3" href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-white hover:bg-[#0A355F] p-3">
              <a className="py-3" href="/token">
                Create Token
              </a>
            </li>
            <li className="hover:text-white hover:bg-[#0A355F] p-3">
              <a className="py-3" href="/trade">
                Trade
              </a>
            </li>
            <li className="hover:text-white hover:bg-[#0A355F] p-3">
              <a className="py-3" href="/swap">
                Swap
              </a>
            </li>
            <li className="hover:text-white hover:bg-[#0A355F] p-3">
              <a className="py-3" href="/shill">
                Shill
              </a>
            </li>
          </ul>
          <button
            onClick={openModal}
            className="py-2 px-8 border border-[#0A355F] md:hidden text-white rounded-sm font-main mt-5 hover:bg-[#0A355F]"
          >
            Connect Wallet
          </button>
          {/* <WalletModal onClose={closeModal} isVisible={isModalVisible} /> */}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
