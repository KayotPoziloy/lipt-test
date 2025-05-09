import { Layout } from 'antd';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContentComponent from './components/content/ContentComponent';
import { useEffect, useState } from 'react';

export default function App() {
  let [securitieSearch, setSecuritieSearch] = useState<string>("");
  
  useEffect(() => {
    if (securitieSearch) {
      console.log(securitieSearch);
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
