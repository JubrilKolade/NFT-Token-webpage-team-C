import { FC, useState } from "react";
import Link from "next/link";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";

export const AppBar: FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [showToken, setShowToken] = useState(false);

  const handleClick = () => {
    setShowToken(!showToken)
  }

  return (
    <div>
      {/* NavBar / Header */}
      <div className="flex items-center justify-between p-2 shadow-lg bg-black text-neutral-content">
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
            TokenForge
          </h1>
        </div>

        {/* Wallet & Settings */}
        <div className="relative flex gap-10 items-center text-slate-300 text-xl max-lg:hidden font-semibold text-center">
          <button onClick={handleClick}>Token Creator</button>
          <div className={`absolute top-10 bg-black z-50 w-80 flex flex-col gap-2 ${showToken ? "block" : "hidden"}`}>
            <Link href="/update">
              <a className="p-2 hover:border border-white">
                Update Metadata
              </a>
            </Link>
            <Link href="/uploader">
              <a className="p-2 hover:border border-white">
                Upload Metadata
              </a>
            </Link>
            <Link href="/metadata">
              <a className="p-2 hover:border border-white">
                Token Metadata
              </a>
            </Link>
          </div>
          <Link href={"/trade"} >Trade</Link>
        </div>

        <div className="flex">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-square btn-ghost text-right">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <WalletMultiButton className="btn btn-ghost mr-4" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
