import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const deleteOderPayload = new GraphQLObjectType({
  name: "deleteOderPayload",
  description: "deleteOderPayload object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
    error: {
      type: GraphQLString,
    },
  }),
});

export const deleteOderInput = new GraphQLInputObjectType({
  name: "deleteOderInput",
  description: "deleteOderInput object",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
