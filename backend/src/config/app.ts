import dotenv from 'dotenv';

dotenv.config();

export const app = {
  env: process.env.APP_ENV ? process.env.APP_ENV : 'local',
  is_local:
    process.env.APP_ENV && process.env.APP_ENV === 'local' ? true : false,
  is_develop:
    process.env.APP_ENV && process.env.APP_ENV === 'develop' ? true : false,
  is_staging:
    process.env.APP_ENV && process.env.APP_ENV === 'staging' ? true : false,
  is_production:
    process.env.APP_ENV && process.env.APP_ENV === 'production' ? true : false,
  is_testing:
    process.env.APP_ENV && process.env.APP_ENV === 'testing' ? true : false,
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
};
