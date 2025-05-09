import { Layout } from 'antd';
import { contentStyle } from '../../styles/contentComponentStyle';
import type { SecuritieSearchProp  } from './props';
import PriceChart from './PriceChart';

export default function ContentComponent({ securitieSearch }: SecuritieSearchProp) {
  return(
    <Layout.Content style={contentStyle}>
      <PriceChart securitieSearch={securitieSearch}/>
    </Layout.Content>
  )
}