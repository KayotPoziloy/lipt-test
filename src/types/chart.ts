export interface ChartCandle {
  open_time: number
  value: number
}

export interface SecuritiesApiResponse {
  zones: {
    series: {
      candles: ChartCandle[]
    }[]
  }[]
}

export interface ChartPoint {
  time: number
  value: number
}
