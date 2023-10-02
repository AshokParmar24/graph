import { GraphQLObjectType, GraphQLString } from "graphql";
import order from "./orderType";

export const createOderPayload = new GraphQLObjectType({
  name: "createOderPayload",
  description: "createOderPayload object",
  fields: () => ({
    order: {
      type: order,
    },
    errors: {
      type: GraphQLString,
    },
  }),
});


