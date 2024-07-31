import Head from 'next/head'
import React from 'react'
import TradingViewWidget from './TradingView'

const TradingViewPage = () => {
  return (
    <div>
        <Head>
            <title>TradingView Integration</title>
        </Head>
        <main>
          <TradingViewWidget />
        </main>
    </div>
  )
}

export default TradingViewPage