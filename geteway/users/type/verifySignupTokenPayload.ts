import { GraphQLBoolean, GraphQLObjectType } from "graphql";

export const verifySignupTokenPayload = new GraphQLObjectType({
  name: "verifySignupTokenPayload",
  description: "verifySignupTokenPayload Object",
  fields: () => ({
    isSuccess: {
      type: GraphQLBoolean,
    },
  }),
});
