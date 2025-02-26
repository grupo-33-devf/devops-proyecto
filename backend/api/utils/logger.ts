import { NextFunction, Request, Response } from 'express'
import winston from 'winston'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'requests.log',
    }),
    new winston.transports.Http({
      host: 'logstash',
      port: 5044,
      path: '/',
      format: winston.format.json(),
    }),
  ],
})

const globalLogger = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', () => {
    logger.info('Request log', {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      body: req.body,
    })
  })
  next()
}

export default logger

export { globalLogger }
