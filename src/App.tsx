import { Layout } from 'antd';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContentComponent from './components/content/ContentComponent';

export default function App() {
  return (
    <Layout>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </Layout>
  )
}
