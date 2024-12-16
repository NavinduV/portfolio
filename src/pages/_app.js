import '../styles/globals.scss';
import "../components/Navbar/Navbar.scss";
import Layout from '../Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />;
  </Layout>
  )
}

export default MyApp;
