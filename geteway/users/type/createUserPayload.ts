import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

const createUserPayload = new GraphQLObjectType({
  name: "createUserPayload",
  description: "createUserPayload Object",
  fields: () => ({
    isSuccess: { type: GraphQLBoolean },
    error: {
      type: GraphQLString,
    },
  }),
});

export default createUserPayload;
