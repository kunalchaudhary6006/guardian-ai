import { createLogger, format, transports } from 'winston';
import { combine } from 'winston-combine';
import { timestamp, json } from 'winston';
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  timestamp: true,
});

export default logger;