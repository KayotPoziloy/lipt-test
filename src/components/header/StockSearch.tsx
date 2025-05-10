import { AutoComplete, Input } from 'antd';
import type { StockSearchProps } from './props.ts';
import { useEffect, useState } from 'react';

interface TickerOption {
  value: string;
  label: string;
}

export default function StockSearch({ setSecuritieSearch }: StockSearchProps) {
  const [options, setOptions] = useState<TickerOption[]>([]);
  const [inputValue, setInputValue] = useState<string>();
  const [securities, setSecurities] = useState<any[]>([]);

  
  useEffect(() => {
    async function fetchTickers() {
      try {
        const response = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities.json?iss.meta=off&iss.json=extended');
        const data = await response.json();
        const securitiesData = data[1].securities;
        setSecurities(securitiesData); // Сохраняем данные тикеров для дальнейшего поиска
      } catch (error) {
        console.error('Ошибка при загрузке тикеров:', error);
      }
    }

    fetchTickers();
  }, []);

  const handleSelect = (value: string) => {
    setSecuritieSearch(value);
    setInputValue('');
  };

  const handleSearch = (value: string) => {
    setInputValue(value);
    const filteredOptions = securities.filter((sec) => 
      sec.SECID.toLowerCase().includes(value.toLowerCase()) || 
      sec.SHORTNAME.toLowerCase().includes(value.toLowerCase())
    );
    const tickerOptions = filteredOptions.map((sec) => ({
      value: sec.SECID,
      label: `${sec.SECID} - ${sec.SHORTNAME}`,
    }));
    setOptions(tickerOptions); // Обновляем список опций для отображения
  };

  
  return (
    <AutoComplete 
      popupMatchSelectWidth={252}
      style={{ width: 300 }} 
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
      value={inputValue}
    >
      <Input.Search 
          // style={{ width: 300 }} 
          size="large" 
          placeholder="Введите тикер" 
          enterButton
          // defaultValue="SBER"
          onSearch={setSecuritieSearch}
      />
    </AutoComplete>
      
  );
};
