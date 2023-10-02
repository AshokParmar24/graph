import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const CreateUserInput = new GraphQLInputObjectType({
  name: "CreateUserInput",
  description: "CreateUserInput user description",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mobile: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    companyId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});
