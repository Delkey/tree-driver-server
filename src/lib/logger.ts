import moment from "moment-timezone";
import winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, label, printf } = format;

const appendTimestamp = format((info, opts) => {
  if (opts.tz) {
    info.timestamp = moment().tz(opts.tz).format();
  }
  return info;
});

// tslint:disable-next-line: no-shadowed-variable
const _format = printf(({ level, message, label, timestamp }) => {
  return `${level}: ${message} [${timestamp}] ${label}`;
});

const logger = createLogger({
  level: "debug",
  format: format.json(),
  defaultMeta: { service: "tree-driver-server" },
  transports: [
    ,/*
    new transports.File({
      filename: "./logs/error.log",
      level: "error",
      format: combine(format.colorize(), label({ label: "" }), appendTimestamp({ tz: "Asia/Seoul" }), myFormat),
    })*/
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      level: "debug",
      format: combine(winston.format.colorize(), label({ label: "" }), appendTimestamp({ tz: "Asia/Seoul" }), _format),
    })
  );
}

export default logger;
