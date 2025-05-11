import { Layout } from 'antd'
import { contentStyle } from '../../styles/contentComponentStyle'
import PriceChart from './PriceChart'
import type { SecuritieSearchState } from '../../types'

export default function ContentComponent({ securitieSearch }: SecuritieSearchState) {
  return (
    <Layout.Content style={contentStyle}>
      <PriceChart securitieSearch={securitieSearch} />
    </Layout.Content>
  )
}
