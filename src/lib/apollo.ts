import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl3ljl07wl01xpdlpucgtn/master',
    cache: new InMemoryCache()
})