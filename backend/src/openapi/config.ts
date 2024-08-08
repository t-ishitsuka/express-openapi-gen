import { join } from 'path';

import { ExtendedRoutesConfig, ExtendedSpecConfig } from 'tsoa';
import { CompilerOptions } from 'typescript';

import { OPENAPI_TAGS } from '@/openapi/tags';

export const specOptions: ExtendedSpecConfig = {
  entryFile: join(__dirname, '../../src/server.ts'),
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: join(__dirname, '../../src'),
  specVersion: 3,
  outputDirectory: join(__dirname, '../../src/openapi/build'),
  controllerPathGlobs: [
    join(__dirname, '../../src/http/controllers/api/**/*Controller.ts'),
  ],
  specFileBaseName: 'openapi',
  tags: OPENAPI_TAGS,
  // OA Info
  name: 'OpenAPI-express-gen',
  description:
    'tsoaを使用してOpenAPIを使用したSpec File の生成、ルーティング、可能であればバリデーションまで行う。',
  contact: {
    name: 'Aprire',
    url: 'https://www.aprire-tech.com',
    email: 'contact@aprire-tech.com',
  },
  version: '1.0.0',
};

export const routeOptions: ExtendedRoutesConfig = {
  entryFile: join(__dirname, '../../src/server.ts'),
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: '/api/v1',
  routesDir: join(__dirname, '../../src/routes'),
  bodyCoercion: true,
  controllerPathGlobs: [
    join(__dirname, '../../src/http/controllers/api/**/*Controller.ts'),
  ],
};

export const compilerOptions: CompilerOptions = {
  baseUrl: './',
  paths: {
    '@/*': ['src/*'],
    '/*': ['*'],
    tsoa: ['node_modules/tsoa/dist'],
    'tsoa/': ['node_modules/tsoa/dist/'],
  },
};
