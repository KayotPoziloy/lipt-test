import { Layout } from 'antd';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '60px',
  // paddingInline: 48,
  // lineHeight: '64px',
  backgroundColor: '#4096ff',
};

export default function HeaderComponent() {
  return(
    <Layout.Header style={headerStyle}>Header</Layout.Header>
  )
}