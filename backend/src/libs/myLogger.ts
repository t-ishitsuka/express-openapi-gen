import path from 'path';
import util from 'util';

import log4js from 'log4js';

import { config } from '@/config/config';

const logDirectory = path.join(process.cwd(), 'src/storage/log');

const logLayout = {
  type: 'pattern',
  pattern: '[%[%p%]] %d [%c] %f:%l %[:%] %x{singleLine}',
  tokens: {
    singleLine: function (logEvent: { data: Array<unknown> }) {
      return logEvent.data
        .map((d) => {
          if (
            typeof d === 'boolean' ||
            typeof d === 'number' ||
            typeof d === 'string'
          ) {
            return d.toString().replace(/\n/gm, '\\n');
          } else {
            return util
              .inspect(d, { breakLength: Infinity })
              .replace(/\n/gm, '\\n');
          }
        })
        .filter((d) => d.length > 0)
        .join(' ');
    },
  },
};

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: logLayout,
    },
    stack: {
      type: 'file',
      layout: logLayout,
      filename: path.join(logDirectory, 'stack.log'),
    },
    daily: {
      type: 'dateFile',
      layout: logLayout,
      filename: path.join(logDirectory, 'daily', 'app.log'),
      pattern: '-yyyy-MM-dd',
      numBackups: 7,
      compress: true,
    },
    slack: {
      type: '@log4js-node/slack',
      token: config.logger.slack_token,
      channel_id: config.logger.test_channel,
      username: 'App通知',
    },
  },
  categories: {
    default: {
      appenders: ['stack'],
      level: 'all',
      enableCallStack: true,
    },
    dev: {
      appenders: ['console', 'daily'],
      level: 'all',
      enableCallStack: true,
    },
    prod: {
      appenders: ['console'],
      level: 'all',
      enableCallStack: true,
    },
    fatal: {
      appenders: ['console', 'slack'],
      level: 'all',
      enableCallStack: true,
    },
  },
});

export const logger = config.app.is_local
  ? log4js.getLogger('dev')
  : log4js.getLogger('prod');

export const fatalLogger = log4js.getLogger('fatal');
