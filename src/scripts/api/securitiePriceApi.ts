import type { LineData, UTCTimestamp } from 'lightweight-charts'
import { SECURITIES_PRICES } from '../../constants/apiUrls'
import type { SecuritiesApiResponse } from '../../types'

export async function getSecuritiePrices(ticker: string): Promise<LineData[]> {
  const url = `${SECURITIES_PRICES}${ticker}.json?candles=72&interval=10`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`)
    }

    const data: SecuritiesApiResponse = await response.json()
    const chartData = data.zones[0].series[0].candles

    if (!Array.isArray(chartData)) {
      throw new Error('Некорректный формат данных от API')
    }

    return chartData.map((point: { open_time: number; value: number }) => ({
      value: point.value,
      time: Math.floor(point.open_time / 1000) as UTCTimestamp,
    }))
  } catch (error) {
    console.error('getSecuritiePrices failed:', error)

    return []
  }
}
