import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import path from "path";
import mongooseServer from "./database/mongooseServer";
import initializeApolloServer from "./apolloServer";

const init = async (): Promise<void> => {
  const PORT = 7000;

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };

  const app: express.Application = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.enable("trust proxy");
  app.use(cors(corsOptions));
  app.options("*", cors());
  app.use(express.json());
  app.use("/static", express.static(path.join(__dirname, "public")));
  app.all("/healthcheck", (_req, res) => res.status(200).send("Healthy"));
  await mongooseServer();
  const apolloServer = initializeApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graph", cors: true });
  let httpServer;
  httpServer = http.createServer(app);
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 5000 }, resolve)
  );
  console.info(`server listen at http://localhost:5000/graph \n`);
};

init();
