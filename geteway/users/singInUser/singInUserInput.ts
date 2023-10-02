import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const singInUserInput = new GraphQLInputObjectType({
  name: "singInUserInput",
  description: "singInUserInput object",
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
