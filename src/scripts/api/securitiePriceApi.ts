import { SECURITIES_PRICES } from "../../constants/apiUrls";

interface ChartCandle {
  open_time: number;
  value: number;
}

interface SecuritiesApiResponse {
  zones: {
    series: {
      candles: ChartCandle[];
    }[];
  }[];
}

interface ChartPoint {
  time: number;
  value: number;
}

export async function getSecuritiePrices(ticker: string): Promise<ChartPoint[]> {
  const url = `${SECURITIES_PRICES}${ticker}.json?candles=72&interval=10`
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`);
    }

    const data: SecuritiesApiResponse = await response.json();
    const chartData = data.zones[0].series[0].candles;

    if (!Array.isArray(chartData)) {
      throw new Error("Некорректный формат данных от API");
    }
    
    return chartData.map((candle: { open_time: number; value: number }) => ({
      value: candle.value,
      time: Math.floor(candle.open_time / 1000),
    }));
  } catch (error) {
    console.error("getSecuritiePrices failed:", error);

    return[]
  }
}
