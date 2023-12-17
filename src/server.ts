import express from "express";
import { env } from "./configs/env";

const app = express();

// Middlewares:
app.use(express.json());

export { app };
