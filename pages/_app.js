import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Context from '../modules/Context';
import Enum from '../modules/Enum';
import Loading from '../components/_app.js/Loading';
import Nav from '../components/_app.js/Nav';
import Footer from '../components/_app.js/Footer';

function MyApp({ Component, pageProps }) {

  const [ loading, setLoading ] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  
  useEffect(() => {
    const loading_on = () => setLoading(true);
    const loading_off = () => setLoading(false);
    
    router.events.on('routeChangeStart', loading_on);
    router.events.on('routeChangeComplete', loading_off);
    router.events.on('routeChangeError', loading_off);
    return () => {
      router.events.off('routeChangeStart', loading_on);
      router.events.off('routeChangeComplete', loading_off);
      router.events.off('routeChangeError', loading_off);
    };
  }, []);
  
  const context = {
    loading, setLoading,
  };
  
  return (
    <>
      <Head>
        <title>portfolio</title>
        <script src="http://localhost:8097"></script>
      </Head>
      <Context.Provider value={ context }>
        <Loading />
        <div className='normal'>
          <Nav/>
          <div className='container'>
            <div className='contents'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </div>
      </Context.Provider>
      <style jsx global>{`
        * {
          padding: 0; margin: 0;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif'; letter-spacing: -0.04em;
          box-sizing: border-box; outline: none; -webkit-text-size-adjust: none;
        }
        a{
          color: #000;
          text-decoration: none;
        }
        button{ cursor: pointer; }
      `}</style>
      <style jsx>{`
        .container{ 
          width: 1200px; min-height: 100vh;
          margin: 0 auto; padding-bottom: 100px; padding-top: 87px;
          text-align: center;
        }
        .contents{
          width: 100%; min-height: calc(100vh - 80px - 100px);
          padding: 20px 0 48px ;
          background: #F8F8F8;
        }
        h1{
          font-size: 24px; margin-bottom: 40px;
        }
        footer{
          height: 200px;
        }
      `}</style>
    </>
  )
};

export default MyApp;
