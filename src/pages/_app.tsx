import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import '../shared/styles/index.css';
import {ThemeProvider} from "styled-components"
import GlobalStyle, {defaultTheme} from "../shared/defaultTheme"

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

export default MyApp
