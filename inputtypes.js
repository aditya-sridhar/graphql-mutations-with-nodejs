const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');

inputMovieType = new GraphQLInputObjectType({
    name: 'MovieInput',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID }

    }
});

inputDirectorType = new GraphQLInputObjectType({
    name: 'DirectorInput',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }

    }
});

exports.inputMovieType = inputMovieType;
exports.inputDirectorType = inputDirectorType;