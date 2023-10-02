import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export const createOrderInput = new GraphQLInputObjectType({
  name: "createOrderInput",
  description: "Input for adding new createOrderInput",
  fields: () => ({
    productName: { type: new GraphQLNonNull(GraphQLString) },
    customerName: { type: new GraphQLNonNull(GraphQLString) },
    mobile: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLString },
    companyId: { type: GraphQLID },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
