import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { user } from "./userType";
import { company } from "../../company/type/companyType";

const companyInfoType = new GraphQLObjectType({
  name: "companyInfoType",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (source) => source._id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mobile: {
      type: new GraphQLNonNull(GraphQLString),
    },
    companyId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    companyInfo: { type: new GraphQLList(company) },
  }),
});

export const UsersConnection = new GraphQLObjectType({
  name: "UserConnection",
  fields: () => ({
    companyInfo: {
      type: GraphQLList(companyInfoType),
    },
  }),
});
