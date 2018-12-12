const { logger } = require('../core')

function responseTime(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const timeTaken = end - start
        logger.info(`Path:[${req.originalUrl}]  timeTaken:[${timeTaken}]`)
    })
    next()
}

module.exports = responseTime