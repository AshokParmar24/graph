import { ApolloServer, gql } from "apollo-server-express";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import schema from "./schema";

const apolloServer = (): ApolloServer => {
  return new ApolloServer({
    cache: new InMemoryLRUCache(),
    schema,
  });
};

export default apolloServer;
