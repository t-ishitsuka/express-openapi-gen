import { app } from '@/app';
import { config } from '@/config/config';

app
  .listen(config.app.port, () => {
    console.log(`Server running at POST: ${config.app.port}`);
  })
  .on('error', (error) => {
    throw new Error(error.message);
  });
