import express, { Application, Request, Response } from "express";
import cors from "cors";
// Application Routes

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});

export default app;
