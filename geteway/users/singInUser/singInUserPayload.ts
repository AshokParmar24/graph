import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const singInUserPayload = new GraphQLObjectType({
  name: "singInUserPayload",
  description: "singInUserPayload Object",
  fields: () => ({
    isSuccess: { type: GraphQLBoolean },
    token: { type: GraphQLString },
    error: {
      type: GraphQLString,
    },
  }),
});
