import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import '../shared/styles/index.css';
import {ThemeProvider} from "styled-components"
import GlobalStyle, {defaultTheme} from "../shared/defaultTheme"
import {ApolloProvider} from "@apollo/client";
import client from "@/apolloClient";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle/>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default MyApp
