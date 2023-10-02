import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const deleteProductPayload = new GraphQLObjectType({
  name: "deleteProductPayload",
  description: "deleteProductPayload object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
    error: {
      type: GraphQLString,
    },
  }),
});
