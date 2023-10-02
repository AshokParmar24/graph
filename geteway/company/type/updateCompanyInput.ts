import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export const addressUpdateInput = new GraphQLInputObjectType({
  name: "addressUpdateInput",
  description: "addressUpdateInput object",
  fields: () => ({
    city: { type: GraphQLString },
    state: {
      type: GraphQLString,
    },
  }),
});

export const updateCompanyInput = new GraphQLInputObjectType({
  name: "updateCompanyInput",
  description: "updateCompanyInput object",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    companyName: { type: GraphQLString },
    companyEmail: { type: GraphQLString },
    role: { type: GraphQLString },
    gst: { type: GraphQLString },
    pan: { type: GraphQLString },
    postcode: { type: GraphQLID },
    address: { type: addressUpdateInput },
  }),
});
