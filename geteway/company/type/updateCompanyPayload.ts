import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { user } from "../../users/type/userType";
import { company } from "./companyType";

export const updateCompanyPayload = new GraphQLObjectType({
  name: "updateCompanyPayload",
  description: "updateCompanyPayload object",
  fields: () => ({
    company: {
      type: company,
    },
    errors: {
      type: GraphQLString,
    },
  }),
});
