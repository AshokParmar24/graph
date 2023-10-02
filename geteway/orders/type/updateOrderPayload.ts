import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";
import order from "./orderType";

export const updateOrderPayload = new GraphQLObjectType({
  name: "updateOrderPayload",
  description: "updateOrderPayload object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
    order: {
      type: order,
    },
    error: {
      type: GraphQLString,
    },
  }),
});
