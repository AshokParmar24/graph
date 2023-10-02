import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { userQueries, userType, userMutations } from "./geteway/users/schema";
import {
  companyMutations,
  companyQuery,
  companyTypes,
} from "./geteway/company/schema";
import {
  orderMutations,
  orderQuery,
  orderTypes,
} from "./geteway/orders/schema";
import {
  productMutations,
  productQuery,
  productTypes,
} from "./geteway/product/schema";

export const types = [
  ...userType,
  ...companyTypes,
  ...orderTypes,
  ...productTypes,
];
export const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...userQueries,
    ...companyQuery,
    ...orderQuery,
    ...productQuery,
  }),
});
export const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...userMutations,
    ...companyMutations,
    ...orderMutations,
    ...productMutations,
  }),
});

export const schema = new GraphQLSchema({
  types,
  query,
  mutation,
});

export default schema;
