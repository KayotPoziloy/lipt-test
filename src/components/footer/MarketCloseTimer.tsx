import { Layout } from 'antd';
import { footerStyle } from '../../styles/footerStyle';
import { useMarketCloseTimer } from '../../scripts/utils/marketCloseTimerUtil';

export default function MarketCloseTimer() {
  const time: string = useMarketCloseTimer();

  return(
    <Layout.Footer style={footerStyle}>{time}</Layout.Footer>
  )
}