import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { addressObject } from "./companyType";

export const addressInput = new GraphQLInputObjectType({
  name: "addressInput",
  description: "addressInput object",
  fields: () => ({
    city: { type: new GraphQLNonNull(GraphQLString) },
    state: {
      type: GraphQLString,
    },
  }),
});

export const createCompanyInput = new GraphQLInputObjectType({
  name: "createCompanyInput",
  description: "Input for adding new createCompanyInput",
  fields: () => ({
    companyName: { type: new GraphQLNonNull(GraphQLString) },
    companyEmail: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(GraphQLString) },
    gst: { type: GraphQLString },
    pan: { type: GraphQLString },
    postcode: { type: GraphQLID },
    address: { type: addressInput },
  }),
});
