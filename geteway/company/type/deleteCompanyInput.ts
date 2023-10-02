import { GraphQLID, GraphQLInputObjectType } from "graphql";

export const deleteCompanyInput = new GraphQLInputObjectType({
  name: "deleteCompanyInput",
  description: "Input for adding new deleteCompanyInput",
  fields: () => ({
    id: { type: GraphQLID },
  }),
});
