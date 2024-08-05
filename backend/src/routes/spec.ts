import type { Router } from 'express';

import { OpenAPIController } from '@/http/controllers/web/openApiController';

export const RegisterSpecRoutes = (app: Router) => {
  const openApiController = new OpenAPIController();

  console.log(openApiController.path);

  app.get('/openapi/html', openApiController.html);
  app.get('/openapi/yaml', openApiController.yaml);
  app.get('/openapi/json', openApiController.json);
};
