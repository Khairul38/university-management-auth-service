/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";
import cookieParser from "cookie-parser";
// Application Routes
import routers from "./app/routes";

const app: Application = express();

// using cors
app.use(cors());
app.use(cookieParser());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.use('/api/v1/users', usersRoutes);
// app.use('/api/v1/academic-semesters', academicSemesterRoutes);
app.use("/api/v1", routers);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// });

// Global error handler
app.use(globalErrorHandler);

// Handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
