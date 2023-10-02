import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const addressObject = new GraphQLObjectType({
  name: "addressObject",
  description: "addressDetailsObject object",
  fields: () => ({
    city: { type: new GraphQLNonNull(GraphQLString) },
    state: {
      type: GraphQLString,
    },
  }),
});

export const company = new GraphQLObjectType({
  name: "company",
  description: "company object",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: (source) => source._id,
    },
    companyName: { type: new GraphQLNonNull(GraphQLString) },
    companyEmail: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(GraphQLString) },
    gst: { type: GraphQLString },
    pan: { type: GraphQLString },
    postcode: { type: GraphQLID },
    address: { type: addressObject },
  }),
});
