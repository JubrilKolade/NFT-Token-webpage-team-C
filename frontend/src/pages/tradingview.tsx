import type { NextPage } from "next";
import Head from "next/head";
import { TradingViewView } from "views/tradingview";

const TV: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <TradingViewView />
    </div>
  );
};

export default TV;