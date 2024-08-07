import dotenv from 'dotenv';

dotenv.config();

export const logger = {
  slack_token: process.env.LOG_SLACK_TOKEN ? process.env.LOG_SLACK_TOKEN : '',
  test_channel: process.env.LOG_SLACK_TEST_CHANNEL
    ? process.env.LOG_SLACK_TEST_CHANNEL
    : '',
};
