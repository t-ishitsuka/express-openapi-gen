import { generateRoutes } from 'tsoa';

import { compilerOptions, routeOptions } from '@/openapi/config';

(async () => {
  await generateRoutes(routeOptions, compilerOptions);
})();
