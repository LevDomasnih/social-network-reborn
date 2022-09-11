import {ApolloClient, ApolloLink, concat, from, HttpLink, InMemoryCache, split} from "@apollo/client";
import Cookies from "js-cookie";
import { createUploadLink } from 'apollo-upload-client';
import {createClient} from "graphql-ws";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {getMainDefinition} from "@apollo/client/utilities";

const wsLink = typeof window !== "undefined" ? new GraphQLWsLink(createClient({
    url: process.env.NEXT_PUBLIC_WS_URL + '/graphql',
    connectionParams: {
        headers: {
            authorization: `Bearer ${Cookies.get('jwt')}`,
        }
    },
})) : null;

const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
});

const splitLink = typeof window !== "undefined" && wsLink != null ? split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    uploadLink,
) : uploadLink;

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
    link: from([authLink, splitLink]),
    connectToDevTools: true,
});

export default client;
