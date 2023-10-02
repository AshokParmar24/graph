import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export const createProductInput = new GraphQLInputObjectType({
  name: "createProductInput",
  description: "createProductInput",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    brand: {
      type: new GraphQLNonNull(GraphQLString),
    },
    manufacturerDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    weight: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    rating: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    companyId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});
