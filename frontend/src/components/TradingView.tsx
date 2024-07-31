// components/TradingViewWidget.tsx
import { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_123',
        });
      };

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      id="tradingview_123"
      ref={containerRef}
      style={{ height: '500px', width: '90vw' }}
    ></div>
  );
};

export default TradingViewWidget;
