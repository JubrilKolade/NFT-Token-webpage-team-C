import type { NextPage } from "next";
import Head from "next/head";
import { TradeView } from "views/trade";

const Trade: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <TradeView />
    </div>
  );
};

export default Trade;