import '../styles/globals.css';
import '../styles/imageCarouselStyles.css';
import '../styles/slider-animations.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
