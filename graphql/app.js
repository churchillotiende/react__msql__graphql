const Koa = require('koa');
const {ApolloServer} = require('apollo-server-koa');
const {makeExecutableSchema} = require('graphql-tools');
const{resolvers , typeDefs} = require('./schemas')
const PORT = 4000;

const app = new Koa();
const server = new ApolloServer({
    schema:makeExecutableSchema({typeDefs , resolvers})
}) 

server.applyMiddleware({app});

app.listen({port:PORT} , () =>
{
    console.log(`Server is up and running at http://127.0.0.1:${PORT + server.graphqlPath}`)
})