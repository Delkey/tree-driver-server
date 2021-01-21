import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

createConnection()
  .then(() => {
    app.start();
  })
  .catch((error) => console.log(error));
