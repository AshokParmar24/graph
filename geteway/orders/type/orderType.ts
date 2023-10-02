import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const order = new GraphQLObjectType({
  name: "order",
  description: "order object",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (source) => source.id,
    },
    order_number: {
      type: GraphQLInt,
    },
    productName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    customerName: { type: GraphQLNonNull(GraphQLString) },
    mobile: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    companyId: { type: GraphQLID },
    userId: { type: GraphQLNonNull(GraphQLID) },
  }),
});

export default order;
