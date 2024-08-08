import { app } from '@/app';
import { config } from '@/config/config';
import { logger } from '@/libs/myLogger';

app
  .listen(config.app.port, () => {
    logger.info(`Server running at POST: ${config.app.port}`);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });
