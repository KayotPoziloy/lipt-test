export interface TickerOption {
  value: string
  label: string
}

export interface SecurityItem {
  SECID: string
  SHORTNAME: string
}

export interface SecuritieSearchState {
  securitieSearch: string
}

export interface StockSearchProps {
  setSecuritieSearch: (value: string) => void
}
