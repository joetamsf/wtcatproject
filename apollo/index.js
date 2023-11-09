const { gql } = require('apollo-server');
const { ApolloServer} = require('@apollo/server');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { MongoDataSource } = require('apollo-datasource-mongodb');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { PrismaClient } = require('@prisma/client');
var jwt = require('jsonwebtoken');
var { GraphQLError } = require('graphql')

const prisma = new PrismaClient();

const typeDefs = `
    type Likes {
        name: String!
        likes: Int! 
    }

    type Query {
        likes(name: String!): [Likes]
        names(likes: Int!): [Likes]
        allLikes: [Likes]
    }
`;

const resolvers = { 
    Query: {
        allLikes: (_, __, contextValue) => { 
            if (!contextValue.users) {
                throw new GraphQLError('Error', {
                    extensions: {
                        code: 'Wrong JWT',
                        http: { status: 403},
                    }
                })
            }
            return prisma.likescount.findMany();
        }
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    includeStacktraceInErrorResponses: false
});

const { url } = startStandaloneServer(server, {
    context: async ({ req }) => {
        const token = req.headers.authorization || '';
        let userData = '';
        jwt.verify(token, process.env.BACK_TOKEN_SEC,  {audience: 'wtcprojQL'}, (err, payload) => {
            if (!err) {
                userData = payload.usr
            } 
        }) 
;
        return {
            users: userData
        }
    },
    listen: {port: 5000}
    }
    );