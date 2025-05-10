import { priceChartStyle } from '../../styles/priceChartStyle';
import type { SecuritieSearchProp  } from './props';
import usePriceChart from '../../scripts/hooks/usePriceChart';
import { useEffect } from 'react';
import { getSecuritiePrices } from '../../scripts/api/securitiePriceApi';

export default function PriceChart({ securitieSearch }: SecuritieSearchProp) {
  const { chartContainerRef, updateData } = usePriceChart();

  useEffect(() => {
    async function loadData(ticker: string) {
      try {
        const data = await getSecuritiePrices(ticker);
        updateData(data)
      } catch (error) {
        console.error('Failed to load chart data:', error);
      }
    }

    const tickerToLoad = securitieSearch || 'SBER';

    loadData(tickerToLoad);
  }, [securitieSearch]);

  return (
    <div ref={chartContainerRef} style={ priceChartStyle } />
  );
}
