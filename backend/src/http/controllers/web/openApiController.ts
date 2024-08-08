import * as fs from 'fs';
import { join } from 'path';

import { Request, Response } from 'express';

export class OpenAPIController {
  public path: string;

  constructor() {
    this.path = join(__dirname, '../../../openapi/build');
    this.html = this.html.bind(this);
    this.yaml = this.yaml.bind(this);
    this.json = this.json.bind(this);
  }

  /**
   * OpenAPI HTML を返却する
   */
  async html(_req: Request, res: Response): Promise<Response> {
    const path = join(this.path, 'openapi.html');

    if (!fs.existsSync(path)) {
      // throw new NotFoundException(ErrorCode.NOT_FOUND);
    }

    return res
      .setHeader('Content-Type', 'text/html')
      .send(fs.readFileSync(path, 'utf-8'));
  }

  /**
   * OpenAPI YAML を返却する
   */
  async yaml(_req: Request, res: Response): Promise<Response> {
    const path = join(this.path, 'openapi.yaml');

    if (!fs.existsSync(path)) {
      // throw new NotFoundException(ErrorCode.NOT_FOUND);
    }

    return res
      .setHeader('Content-Type', 'application/yaml')
      .send(fs.readFileSync(path, 'utf-8'));
  }

  /**
   * OpenAPI JSON を返却する
   */
  async json(_req: Request, res: Response): Promise<Response> {
    const path = join(this.path, 'openapi.json');

    console.log(path);

    if (!fs.existsSync(path)) {
      // throw new NotFoundException(ErrorCode.NOT_FOUND);
    }

    return res
      .setHeader('Content-Type', 'application/json')
      .send(fs.readFileSync(path, 'utf-8'));
  }
}
