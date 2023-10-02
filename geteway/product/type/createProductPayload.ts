import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const createProductPayload = new GraphQLObjectType({
  name: "createProductPayload",
  description: "createProductPayload object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
    error: {
      type: GraphQLString,
    },

  }),
});
