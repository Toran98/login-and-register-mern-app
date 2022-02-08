import express from "express";
import mongoose from "mongoose";
import routes  from "./route";
import 'dotenv/config'

mongoose
  .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(process.env.PORT, () => {
      console.log("Server has started!");
    });
  });

