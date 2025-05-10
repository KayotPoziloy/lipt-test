import { createChart, LineSeries  } from 'lightweight-charts';
import type { IChartApi, ISeriesApi, LineData } from 'lightweight-charts';
import { useRef, useEffect } from 'react';
import { getSecuritiePrices } from '../api/securitiePriceApi';

export default function usePriceChart(initialData: LineData[] = []) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  
  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const chartOprions = {
      width: container.clientWidth,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000000',
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
      autoSize: true,
    }

    const chart = createChart(container, chartOprions);
    chartRef.current = chart;

    const lineSeries = chart.addSeries(LineSeries, {
       color: 'red', 
       lineWidth: 2, 
    });

    seriesRef.current = lineSeries;
    lineSeries.setData(initialData);

    const handleResize = () => {
      chart.applyOptions({ width: container!.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  const loadChartData = async (ticker: string) => {
    try {
      const data = await getSecuritiePrices(ticker);
      if (seriesRef.current) {
        seriesRef.current.setData(data);
      }
    } catch (error) {
      console.error('Failed to load chart data:', error);
    }
  }

  return { chartContainerRef, loadChartData};
}