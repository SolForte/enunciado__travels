import express from "express";
import indexRouter from "./routes/index.routes.js";

const app = express();
app.use(indexRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})