const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = graphql;


const users = [
    { id: '23', firstName: 'shouvik', age: 28 },
    { id: '28', firstName: 'ambalika', age: 27 }
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
               return  _.find(users, { id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});