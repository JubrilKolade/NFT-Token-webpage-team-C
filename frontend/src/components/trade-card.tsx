"use client";

import { useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react';
import Image from "next/image";
import Link from "next/link";
// import {  } from '../../types'; // Adjust the import path as needed
import { DataProp } from '../../dumy-data';

interface TradeCardProps {
    data: DataProp;
}

export const TradeCard: FC<TradeCardProps> = ({ data }) => {
    const { publicKey, signMessage } = useWallet();

    return (
        <>
            <Link href={`/trade/${data.user}?${data.name}`}>
                <div
                    className="p-2 text-white rounded-sm hover:bg-opacity-75 cursor-pointer"
                    key={data.user}
                >
                    <div className="px-2 md:px-10">
                        <Image 
                            src={data.image}
                            alt="card"
                            width={200}
                            height={200}
                            className="mb-2 w-full rounded-t-xl"
                        />
                    </div>
                    <div className="grid gap-2 bg-gradient-to-tr from-[#9945FF] to-[#14F195] text-white p-2 border border-white rounded-b-xl">
                        <p className="font-bold text-center text-sm md:text-lg">
                            {data.name}
                            <span> : {data.ticker}:</span>
                        </p>
                        <h1 className="text-xs md:text-sm mx-auto p-1 w-fit border border-t-4 border-white">Created By {data.user}</h1>
                        <p className="text-xs md:text-sm">
                            Market cap: <span className="text-primary">{data.marketCap}</span>
                        </p>
                        <p className="text-xs md:text-sm">{data.desc}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};
