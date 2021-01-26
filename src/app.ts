import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import env from "dotenv";
import express, { Express } from "express";
import depthLimit from "graphql-depth-limit";
import { createServer as createServerHttp, Server as ServerHttp } from "http";
import { createServer as createServerHttps, Server as ServerHttps } from "https";
import schema from "./schema";

class App {
  public express: Express;
  public server: ServerHttp | ServerHttps;
  public apolloServer: ApolloServer;
  private port: number;
  private path: string;

  constructor() {
    env.config({ path: __dirname + "/.env" });
    this.express = express();
    this.server = process.env.NODE_ENV === "dev" ? createServerHttp(this.express) : createServerHttps(null, this.express);
    this.apolloServer = new ApolloServer({
      context: (ctx) => ctx,
      schema,
      validationRules: [depthLimit(7)],
    });
    this.middlewares();
    this.port = process.env.PORT ? Number(process.env.PORT) : 4000;
    this.path = "/graphql";
  }

  private middlewares = (): void => {
    const { apolloServer, express: app, path } = this;
    app.use("*", cors());
    app.use(compression());
    apolloServer.applyMiddleware({ app, path });
  };

  public start = (): void => {
    const { server, port } = this;
    server.listen({ port }, (): void => console.log(`🚀  Server ready at port ${port}`));
  };
}

export default new App();
