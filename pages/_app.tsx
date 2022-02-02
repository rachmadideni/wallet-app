// import '../styles/dist.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store';
import Layout from '../components/layout'
// custom global styles
import GlobalStyles from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
