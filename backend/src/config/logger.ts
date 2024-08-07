import dotenv from 'dotenv';

dotenv.config();

export const logger = {
  slack_general: process.env.LOG_SLACK_GENERAL
    ? process.env.LOG_SLACK_GENERAL
    : '',
};
