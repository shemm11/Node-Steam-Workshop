import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'info/logs/error.log', level: 'error' }),
    new transports.File({ filename: 'info/logs/combined.log' })
  ],
});

export default logger;
