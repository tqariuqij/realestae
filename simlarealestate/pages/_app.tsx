import '../styles/globals.css';
import '../styles/imageCarouselStyles.css';
import '../styles/slider-animations.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
