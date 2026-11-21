import express, { type Express, type Request, type Response } from 'express';
import { handlerReadiness } from "./api/readiness.js";
import { middlewareLogResponses } from './middlewares/logresponses.js';
import { hitCounter } from './api/hits.js';
import { resetHitCounter } from './api/resetter.js';
import { middlewareMetricsInc } from './middlewares/metrics.js';

const app: Express = express();
const port = 8080;

app.use(middlewareLogResponses)
app.use("/app", middlewareMetricsInc, express.static("./src/app"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/healthz", handlerReadiness);
app.get("/metrics", hitCounter);
app.get("/reset", resetHitCounter);