import { useState, useEffect } from "react";
import type { StockSearchProps } from "../../components/header/props";
import { fetchTickers } from "../api/securitieNameApi";

interface TickerOption {
  value: string;
  label: string;
}

export default function useStockSearch({ setSecuritieSearch }: StockSearchProps) {
  const [options, setOptions] = useState<TickerOption[]>([]);
  const [inputValue, setInputValue] = useState<string>();
  const [securities, setSecurities] = useState<any[]>([]);
  
  useEffect(() => {
    async function loadSecurities() {
        try {
          const data = await fetchTickers();
          setSecurities(data);
        } catch (error) {
          console.error('Ошибка при загрузке тикеров:', error);
        }
    }
  
    loadSecurities();
    }, []);
  
    const handleSelect = (value: string) => {
      setSecuritieSearch(value);
      setInputValue('');
      setOptions([]);
    };
  
    const handleSearch = (value: string) => {
      setInputValue(value);

      if (!value) {
        setOptions([]);
        return;
      }
      
      const filteredOptions = securities.filter((sec) => 
        sec.SECID.toLowerCase().includes(value.toLowerCase()) || 
        sec.SHORTNAME.toLowerCase().includes(value.toLowerCase())
      );

      const tickerOptions = filteredOptions.map((sec) => ({
        value: sec.SECID,
        label: `${sec.SECID} - ${sec.SHORTNAME}`,
      }));

      setOptions(tickerOptions);
    };

  return { handleSelect, handleSearch, options, inputValue }
}