import { AutoComplete } from 'antd'
import useStockSearch from '../../scripts/hooks/useStockSearch.ts'
import { stockSearchStyle } from '../../styles/stockSearchStyle.ts'
import type { StockSearchProps } from '../../types'

export default function StockSearch({ setSecuritieSearch }: StockSearchProps) {
  const { handleSelect, handleSearch, options, inputValue } = useStockSearch({
    setSecuritieSearch,
  })

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={stockSearchStyle}
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
      value={inputValue}
    />
  )
}
