import { AutoComplete } from 'antd';
import type { StockSearchProps } from './props.ts';
import useStockSearch from '../../scripts/hooks/useStockSearch.ts';
import { stockSearchStyle } from '../../styles/stockSearchStyle.ts';

export default function StockSearch({ setSecuritieSearch }: StockSearchProps) {
  const { handleSelect, handleSearch, options, inputValue } = useStockSearch({ setSecuritieSearch });
  
  return (
    <AutoComplete 
      popupMatchSelectWidth={252}
      style={stockSearchStyle} 
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
      value={inputValue}
    />
  );
};
