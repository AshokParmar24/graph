import { ApolloServer, gql } from "apollo-server-express";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import schema from "./schema";

export interface Context {
  req: string;
}

const context = async ({ req }): Promise<Context> => {
  const token = await req?.headers?.authorization;
  console.log("token", token);
  return { req: req };
};
const apolloServer = (): ApolloServer => {
  return new ApolloServer({
    cache: new InMemoryLRUCache(),
    schema,
    context,
  });
};

export default apolloServer;
