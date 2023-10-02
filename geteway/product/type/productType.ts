import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

export const productType = new GraphQLObjectType({
  name: "productType",
  description: "productType Object",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (source) => source._id,
    },
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
