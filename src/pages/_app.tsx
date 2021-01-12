import 'reset-css';
import '../assets/css/common.scss';

function Layout({ Component, pageProps }) {
  return (
    <div id="app">
      <Component { ...pageProps } />
    </div>
  );
}

export default Layout;