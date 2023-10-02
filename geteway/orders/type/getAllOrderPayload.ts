import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import order from "./orderType";

export const getAllOrderPayload = new GraphQLObjectType({
  name: "getAllOrderPayload",
  description: "deleteOderPayload object",
  fields: () => ({
    data: {
      type: GraphQLList(order),
    },
    error: {
      type: GraphQLString,
    },
  }),
});
