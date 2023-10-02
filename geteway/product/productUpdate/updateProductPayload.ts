import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { productType } from "../type/productType";

export const updateProductPayload = new GraphQLObjectType({
  name: "updateProductPayload",
  description: "updateProductPayload object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
    updateProduct: { type: new GraphQLNonNull(productType) },
    error: {
      type: GraphQLString,
    },
  }),
});
