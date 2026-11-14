import express, { type Express, type Request, type Response } from 'express';
import { handlerReadiness } from "./api/readiness.js";

const app: Express = express();
const port = 8080;

app.use("/app", express.static("./src/app"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/healthz", handlerReadiness);