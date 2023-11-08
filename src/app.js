import express from "express";
import config from "config";
import logger from "./utils/logger.js";
import routes from "./routes.js";

const app = express();
const port = config.get("port");

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  routes(app);
});