// var appRoot = require('app-root-path');
var winston = require('winston')

var options = {
  file: {
    level: 'info',
    name: 'file.info',
    filename: `app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  errorFile: {
    level: 'error',
    name: 'file.error',
    filename: `error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}


// your centralized logger object
let logger = winston.createLogger({
    levels: winston.config.npm.levels,
    format : winston.format.json(),
  transports: [
    new (winston.transports.Console)(options.console),
    new (winston.transports.File)(options.errorFile),
    new (winston.transports.File)(options.file)
  ],
  exitOnError: false, // do not exit on handled exceptions
})

module.exports = logger

module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
}
