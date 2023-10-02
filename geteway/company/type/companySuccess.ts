import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { company } from "./companyType";

export const companySuccess = new GraphQLObjectType({
  name: "companySuccess",
  description: "companySuccess object",
  fields: () => ({
    company: {
      type: company,
    },
    errors: {
      type: GraphQLString,
    },
  }),
});
