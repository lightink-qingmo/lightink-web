const log4js = require('log4js');
const server = 'dev';
const env = server == 'dev' ? '' : 'prod';
log4js.configure({
    appenders: {
        date: {
            type: 'dateFile',
            filename: 'logs/funlife.log',
            compress: true
        },
        log: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders:['log'],
            level: 'info'
        },
        prod: {
            appenders: ['date'],
            level: 'info'
        }
    },
    pm2: true
})
const logger = log4js.getLogger(env);
module.exports = logger;


