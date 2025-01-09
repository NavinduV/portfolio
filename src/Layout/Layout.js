import { Sora, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import Header from "../components/Header/Header";
import TopLeftImg from "../components/Image/TopLeftImg";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page text-white bg-site bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
      <TopLeftImg />
      <Navbar />
      <Header />
      {children}
    </div>
  )
};

export default Layout;
