import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache} from "@apollo/client";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({headers = {}}) => ({
        headers: {
            ...headers, // @ts-ignore
            authorization: headers?.cookieToken ? `Bearer ${headers?.cookieToken}` : '',
        }
    }));

    return forward(operation);
})

const nextClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authLink, httpLink),
});

export default nextClient;
