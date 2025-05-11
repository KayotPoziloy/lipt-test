import { priceChartStyle } from '../../styles/priceChartStyle'
import usePriceChart from '../../scripts/hooks/usePriceChart'
import { useEffect } from 'react'
import type { SecuritieSearchState } from '../../types'

export default function PriceChart({ securitieSearch }: SecuritieSearchState) {
  const { chartContainerRef, loadChartData } = usePriceChart()

  useEffect(() => {
    const tickerToLoad = securitieSearch || 'SBER'
    loadChartData(tickerToLoad)
  }, [securitieSearch])

  return <div ref={chartContainerRef} style={priceChartStyle} />
}
