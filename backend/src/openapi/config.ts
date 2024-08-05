import { ExtendedRoutesConfig, ExtendedSpecConfig } from 'tsoa';
import { CompilerOptions } from 'typescript';
import { join } from 'path';

export const specOptions: ExtendedSpecConfig = {
  entryFile: join(__dirname, '../../src/server.ts'),
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: join(__dirname, '../../src'),
  specVersion: 3,
  outputDirectory: join(__dirname, '../../src/openapi/build'),
  controllerPathGlobs: [join(__dirname, '../../src/http/controllers/api/**/*Controller.ts')],
  specFileBaseName: 'openapi'
};

export const routeOptions: ExtendedRoutesConfig = {
  entryFile: join(__dirname, '../../src/server.ts'),
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: "/api/v1",
  routesDir: join(__dirname, '../../src/routes'),
  bodyCoercion: true,
  controllerPathGlobs: [join(__dirname, '../../src/http/controllers/api/**/*Controller.ts')],
};

export const compilerOptions: CompilerOptions = {
  "baseUrl": "./",
  "paths": {
    "@/*": ["src/*"],
    "/*": ["*"],
    "tsoa": ["node_modules/tsoa/dist"],
    "tsoa/": ["node_modules/tsoa/dist/"]
  }
}