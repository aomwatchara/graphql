import { ApolloServer, gql } from 'apollo-server';


//schema



//resolver


//function apollo-server
const startApolloServer = async (typeDefs, resolvers) =>{
    const server = new ApolloServer({typeDefs, resolvers});
    const { url } = await server.listen();
    console.log(`Server ready at ${url}`);
};


//call funtion
startApolloServer(typeDefs, resolvers);
