import { Input } from 'antd';
import type { StockSearchProps } from './props.ts';

export default function StockSearch({ setSecuritieSearch }: StockSearchProps) {
  return (
      <Input.Search 
        style={{ width: 300 }} 
        size="large" 
        placeholder="input here" 
        enterButton
        onSearch={setSecuritieSearch}
      />
  );
};
