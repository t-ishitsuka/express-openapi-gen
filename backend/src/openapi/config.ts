import { ExtendedRoutesConfig, ExtendedSpecConfig } from 'tsoa';
import { CompilerOptions } from 'typescript';

export const specOptions: ExtendedSpecConfig = {
  entryFile: "./src/server.ts",
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: "./src",
  specVersion: 3,
  outputDirectory: "./src/openapi/build",
  controllerPathGlobs: ["./src/http/controllers/api/**/*Controller.ts"],
  specFileBaseName: 'openapi'
};

export const routeOptions: ExtendedRoutesConfig = {
  entryFile: "./src/app.ts",
  noImplicitAdditionalProperties: 'throw-on-extras',
  basePath: "/api/v1",
  routesDir: './src/routes',
  bodyCoercion: true,
  controllerPathGlobs: ["./src/http/controllers/api/**/*Controller.ts"],
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