import { createChart, LineSeries } from 'lightweight-charts'
import type { IChartApi, ISeriesApi, LineData } from 'lightweight-charts'
import { useRef, useEffect } from 'react'
import { getSecuritiePrices } from '../api/securitiePriceApi'
import { chartOptionsConfig } from '../utils/chartOptionsConfig'

export default function usePriceChart(initialData: LineData[] = []) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<'Line'> | null>(null)

  useEffect(() => {
    const container = chartContainerRef.current
    if (!container) return

    const chart = createChart(container, chartOptionsConfig(container.clientWidth))
    chartRef.current = chart

    const lineSeries = chart.addSeries(LineSeries, {
      color: 'red',
      lineWidth: 2,
    })

    seriesRef.current = lineSeries
    lineSeries.setData(initialData)

    const handleResize = () => {
      chart.applyOptions({ width: container!.clientWidth })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [])

  const loadChartData = async (ticker: string) => {
    try {
      const data = await getSecuritiePrices(ticker)
      if (seriesRef.current) {
        seriesRef.current.setData(data)
      }
    } catch (error) {
      console.error('Failed to load chart data:', error)
    }
  }

  return { chartContainerRef, loadChartData }
}
