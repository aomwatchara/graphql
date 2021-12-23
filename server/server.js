import { ApolloServer, gql } from 'apollo-server';

const users =[
    { name: "aom", sex: "M",id:"62021236"},
    { name: "mom", sex: "W",id:"xxx"},
    { name: "pond", sex: "M",id:"62020909"},
    { name: "Tonkla", sex: "M",id"62022877"},
];

//schema
const typeDefs = gql`
    type Query {
        hello: String
        hi: String
        users: [User]
        user(name: String): User
    }
    type User {
        name: String
        sex: String
        id: String
    }
`;


//resolver
const resolvers = {
    Query:{
        hello: (parent, args, context, info) => {
            return "world";
        },
        hi: (parent, args, context, info) => {
            return "62021236";
        },
        users: (parent, args, context, info ) => {
            return users;
        },
        user: (parent, args, context, info ) => {
            return users.find( user => user.name === args.name);
        },
    }
};

//function apollo-server
const startApolloServer = async (typeDefs, resolvers) =>{
    const server = new ApolloServer({typeDefs, resolvers});
    const { url } = await server.listen();
    console.log(`Server ready at ${url}`);
};


//call funtion
startApolloServer(typeDefs, resolvers);
