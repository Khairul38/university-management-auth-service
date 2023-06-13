import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error('Uncaught Exception is detected', error);
  process.exit(1);
});

let server: Server;

async function dbConnect() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database connected successfully');
    server = app.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(
          'Unhandled Rejection is detected, we are closing our server.....',
          error
        );
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

dbConnect();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
