import { GraphQLObjectType, GraphQLString } from "graphql";

export const companyDeletePayload = new GraphQLObjectType({
  name: "companyDeletePayload",
  description: "companyDeletePayload object",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    errors: {
      type: GraphQLString,
    },
  }),
});
