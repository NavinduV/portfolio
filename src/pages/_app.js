import '../styles/globals.scss';
import "../components/Navbar/Navbar.scss";
import "../styles/components.scss";
import Head from 'next/head';
import Layout from '../Layout/Layout';
import Transition from "../components/Transition/Transition";
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Navindu Gunawardhana</title>
        <meta
          name="Navindu Gunawardhana Portfolio"
          content="This is Navindu Gunawardhana Portfolio Website."
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
