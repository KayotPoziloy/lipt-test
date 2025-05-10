import { priceChartStyle } from '../../styles/priceChartStyle';
import type { SecuritieSearchProp  } from './props';
import usePriceChart from '../../scripts/hooks/usePriceChart';
import { useEffect } from 'react';

export default function PriceChart({ securitieSearch }: SecuritieSearchProp) {
  const { chartContainerRef, loadChartData  } = usePriceChart();

  useEffect(() => {
    const tickerToLoad = securitieSearch || 'SBER';
    loadChartData(tickerToLoad);
  }, [securitieSearch]);

  return (
    <div ref={chartContainerRef} style={ priceChartStyle } />
  );
}
