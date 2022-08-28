import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache} from "@apollo/client";
import Cookies from "js-cookie";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
    const token = Cookies.get('jwt')

    operation.setContext(({headers = {}}) => ({
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }));

    return forward(operation);
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authLink, httpLink),
    connectToDevTools: true,
});

export default client;
