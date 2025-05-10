import { Layout } from 'antd';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContentComponent from './components/content/ContentComponent';
import { useEffect, useState } from 'react';
import { getSecuritiePrices } from './scripts/backend/securitiePriceApi';

export default function App() {
  let [securitieSearch, setSecuritieSearch] = useState<string>("");
  
  useEffect(() => {
    if (securitieSearch) {
      getSecuritiePrices(securitieSearch);
    }
  }, [securitieSearch]);

  return (
    <Layout>
      <HeaderComponent setSecuritieSearch={setSecuritieSearch}/>
      <ContentComponent securitieSearch={securitieSearch}/>
      <FooterComponent />
    </Layout>
  )
}
