import express from "express";
import { routes } from "./routes/route";

const app = express();

// Middlewares:
app.use(express.json());
app.use(routes);

export { app };
