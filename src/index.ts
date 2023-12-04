import express, { Application } from "express";
import "dotenv/config"
import bodyParser from "body-parser";
import dbInit from "./configs/database/init";
import mainRoute from "./routes/route";

dbInit();

const app: Application = express();
const port: string = process.env.PORT || '8000';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', mainRoute);

app.listen(port, () => console.log(`server started at port ${port}`));

