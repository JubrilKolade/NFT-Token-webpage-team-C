"use client";

import { useWallet } from '@solana/wallet-adapter-react';
import { FC, useState } from 'react';
import dummyData, { DataProp } from "../../dumy-data";
import { TradeCard } from './trade-card';

export const TradeToken: FC = () => {
    // const { publicKey, signMessage } = useWallet();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 12;
  
    // Filter the data based on the search query
    const filteredData = dummyData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    // Get the items for the current page
    const currentItems = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
        <>
          
      <div className="px-20 pb-20 max-lg:px-5 mt-20">
        <div className="flex flex-col items-center">
          <div className="flex items-center border rounded-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] bg-transparent outline-none text-primary p-4 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            />
            ()
          </div>
        </div>

        {filteredData.length > 0 ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 gap-5">
              {currentItems.map((data: DataProp) => (
                <TradeCard key={data.name} data={data} />
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-white text-2xl text-center my-20">
            No Token Found
          </h1>
        )}

        <div className="mx-[100px] max-sm:mx-5 flex justify-between mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>  
        </>
    );
};
