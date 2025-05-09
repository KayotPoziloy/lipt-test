import { useEffect, useRef } from 'react';
import { createChart, LineSeries  } from 'lightweight-charts';
import { priceChartStyle } from '../../styles/priceChartStyle';
import type { IChartApi, LineData } from 'lightweight-charts';
import type { SecuritieSearchProp  } from './props';

export default function PriceChart({ securitieSearch }: SecuritieSearchProp) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    // Создаём график
    const chart = createChart(container, {
      width: container.clientWidth,
      // height: 200,
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
      },
    });

    // Сохраняем ссылку
    chartRef.current = chart;

    const lineSeries = chart.addSeries(LineSeries, {
       color: 'red', 
       lineWidth: 2, 
    });


    // Мок-данные для теста
    const mockData: LineData[] = [
      { time: '2024-05-01', value: 301.95 },
      { time: '2024-05-02', value: 108 },
      { time: '2024-05-03', value: 102 },
      { time: '2024-05-04', value: 110 },
      { time: '2024-05-05', value: 112 },
    ];

    lineSeries.setData(mockData);

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [securitieSearch]);

  return (
    <div>
      <h2>{securitieSearch}</h2>
      <div ref={chartContainerRef} style={ priceChartStyle } />
    </div>
  );
}
