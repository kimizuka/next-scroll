import 'reset-css';
import '../assets/css/common.scss';
import Head from 'next/head';

function Layout({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <link rel="shortcut icon" href="https://kimizuka.github.io/next-scroll/favicon.ico" />
      </Head>
      <Component { ...pageProps } />
    </div>
  );
}

export default Layout;