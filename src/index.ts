import "dotenv/config";
import { DbConnection } from "./configs/db.connection";
import { env } from "./configs/env";
import { app } from "./server";

DbConnection.connect();

app.listen(env.PORT, () => console.log("Ellow there, mate! Server is running!🚀"));
