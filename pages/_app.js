import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
//   html {
//     --main-color: #FFCA00;
//     --main-bg: #F2F2F5;
//     --header-size: 2rem;
//     --header-weight: 500;
//     --header-mb: 1.875rem;
//     --category-text-size: 1.125rem;
//     --product-title-size: 1.25rem;
//     --product-title-weight: 500;
//     --product-time-border: 0px 30px;
//     --product-time-bg: rgba(0, 0, 0, 0.8);
//   }
// `;

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </Layout>
  )
}