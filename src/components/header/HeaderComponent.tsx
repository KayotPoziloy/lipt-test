import { Layout } from 'antd'
import SiteTitle from './SiteTitle'
import { headerStyle } from '../../styles/headerStyle.ts'
import StockSearch from './StockSearch.tsx'
import type { StockSearchProps } from '../../types/stock.ts'

export default function HeaderComponent({ setSecuritieSearch }: StockSearchProps) {
  return (
    <Layout.Header style={headerStyle}>
      <SiteTitle />
      <StockSearch setSecuritieSearch={setSecuritieSearch} />
    </Layout.Header>
  )
}
