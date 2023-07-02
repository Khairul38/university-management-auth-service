import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";

// Custom Log Format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  return `${date.toDateString()}, ${date.toLocaleTimeString()} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: combine(label({ label: "P.H.U." }), timestamp(), myFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.Console(),
    // new transports.File({
    //   filename: path.join(
    //     process.cwd(),
    //     'logs',
    //     'winston',
    //     'successes',
    //     'phu-%DATE%-success.log'
    //   ),
    //   level: 'info',
    // }),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "logs",
        "winston",
        "successes",
        "phu-%DATE%-success.log"
      ),
      datePattern: "YYYY-MM-DD-HH-MM-SS",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "1d",
    }),
  ],
});

export const errorLogger = createLogger({
  level: "error",
  format: combine(label({ label: "P.H.U." }), timestamp(), myFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.Console(),
    // new transports.File({
    //   filename: path.join(
    //     process.cwd(),
    //     'logs',
    //     'winston',
    //     'errors',
    //     'phu-%DATE%-error.log'
    //   ),
    //   level: 'error',
    // }),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "logs",
        "winston",
        "errors",
        "phu-%DATE%-error.log"
      ),
      datePattern: "YYYY-MM-DD-HH-MM-SS",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "1d",
    }),
  ],
});
