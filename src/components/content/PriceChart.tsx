import { priceChartStyle } from '../../styles/priceChartStyle';
import type { SecuritieSearchProp  } from './props';
import usePriceChart from '../../scripts/hooks/usePriceChart';
import { useEffect } from 'react';
import { getSecuritiePrices } from '../../scripts/backend/securitiePriceApi';

export default function PriceChart({ securitieSearch }: SecuritieSearchProp) {
  const { chartContainerRef, updateData } = usePriceChart([
      { value: 0, time: 1642425322 }, 
      { value: 8, time: 1642511722 }, 
      { value: 10, time: 1642598122 }, 
      { value: 20, time: 1642684522 }, 
      { value: 3, time: 1642770922 }, 
      { value: 43, time: 1642857322 }, 
      { value: 41, time: 1642943722 }, 
      { value: 43, time: 1643030122 }, 
      { value: 56, time: 1643116522 }, 
      { value: 46, time: 1643202922 }
  ]);

  useEffect(() => {
    async function loadData() {
      try {
        if (securitieSearch) {
          const data = await getSecuritiePrices(securitieSearch);
          updateData(data)
        }
      } catch (error) {
        console.error('Failed to load chart data:', error);
      }
    }

    loadData();
  }, [securitieSearch]);

  return (
    <div ref={chartContainerRef} style={ priceChartStyle } />
  );
}
