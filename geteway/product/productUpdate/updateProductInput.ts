import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export const updateProductInput = new GraphQLInputObjectType({
  name: "updateProductInput",
  description: "updateProductInput",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    brand: {
      type: GraphQLString,
    },
    manufacturerDate: {
      type: GraphQLString,
    },
    weight: {
      type: GraphQLInt,
    },
    rating: {
      type: GraphQLInt,
    },
    companyId: {
      type: GraphQLID,
    },
    price: {
      type: GraphQLInt,
    },
  }),
});
