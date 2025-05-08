import { Layout } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  textAlign: 'center',
  height: 'calc(100vh - 60px * 2)',
  color: '#fff',
  backgroundColor: '#0958d9',
};

export default function ContentComponent() {
  return(
    <Layout.Content style={contentStyle}>Content</Layout.Content>
  )
}