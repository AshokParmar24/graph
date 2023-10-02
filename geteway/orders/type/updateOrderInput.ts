import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export const updateOrderInput = new GraphQLInputObjectType({
  name: "updateOrderInput",
  description: "Obeject updateOrderInput",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    order_number: {
      type: GraphQLInt,
    },
    productName: { type: GraphQLString },
    customerName: { type: GraphQLString },
    mobile: { type: GraphQLString },
    address: { type: GraphQLString },
    companyId: { type: GraphQLID },
    userId: {
      type: GraphQLID,
    },
  }),
});
