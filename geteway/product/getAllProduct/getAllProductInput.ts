import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { productType } from "../type/productType";

export const getAllProductPayload = new GraphQLObjectType({
  name: "getAllProductPayload",
  description: "getAllProductPayload Object",
  fields: () => ({
    data: {
      type: GraphQLList(productType),
    },
    errors: {
      type: GraphQLString,
    },
  }),
});
