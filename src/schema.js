const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            a: {
                type: new GraphQLObjectType({
                    name: 'A',
                    fields: {
                        id: { type: GraphQLID },
                        foo: {
                            type: GraphQLString,
                            args: {
                                a: { type: GraphQLString },
                            },
                            resolve: (root, { a }) => a,
                        },
                    },
                }),
            },
            b: {
                type: new GraphQLObjectType({
                    name: 'B',
                    fields: {
                        id: { type: GraphQLID },
                        bar: {
                            type: GraphQLString,
                            args: {
                                b: { type: GraphQLString },
                            },
                            resolve: (root, { b }) => b,
                        },
                    },
                }),
            },
        },
    }),
});

module.exports = schema;
