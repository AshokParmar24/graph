import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from "graphql";

// @ts-ignore
export const verifySignupTokenInput = new GraphQLInputObjectType({
  name: "verifySignupTokenInput",
  description: "verifySignupTokenInput Object",
  fields: () => ({
    token: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
