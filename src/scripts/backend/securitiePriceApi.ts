import { SECURITIES_PRICES } from "../../constants/apiUrls";

export async function getSecuritiePrices(securitieName: string): Promise<{ time: string; value: number }[]> {
  const response = await fetch(SECURITIES_PRICES + securitieName + '.json');
  const value = await response.json();
  const chartData = value.zones[0].series[0].candles;

  return chartData.map((candle: { open_time: number; value: number }) => ({
    value: candle.value,
    time: candle.open_time,
  }))
}
