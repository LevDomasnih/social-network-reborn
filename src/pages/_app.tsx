import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store/store";
import '../shared/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          {/*@ts-ignore*/}
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
