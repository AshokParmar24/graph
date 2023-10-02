import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { company } from "./companyType";

export const userConnection = new GraphQLObjectType({
  name: "userConnection",
  description: "userConnection Object",
  fields: () => ({
    data: {
      type: GraphQLList(company),
    },
    errors: {
      type: GraphQLString,
    },
  }),
});
