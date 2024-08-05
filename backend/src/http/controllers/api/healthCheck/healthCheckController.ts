import { Controller, Get, Route, Tags } from 'tsoa';

import { OkResponse } from '@/http/responses/global/okResponse';
import { HEALTH_CHECK_TAG_NAME } from '@/openapi/tags';

@Route('health-check')
export class healthCheckController extends Controller {
  @Get()
  @Tags(HEALTH_CHECK_TAG_NAME)
  public async healthCheck() {
    return new OkResponse().toJson();
  }
}
