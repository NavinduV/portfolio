import '../styles/globals.scss';
import '../components/Navbar/Navbar.scss';
import '../styles/components.scss';
import Head from 'next/head';
import Layout from '../Layout/Layout';
import Transition from '../components/Transition/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { HeaderProvider } from '../Context/HeaderContext'; // 

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Navindu Gunawardhana</title>
      </Head>
      <HeaderProvider>
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div key={router.route} className="h-screen">
              <Transition />
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </HeaderProvider>
    </>
  );
}

export default MyApp;
