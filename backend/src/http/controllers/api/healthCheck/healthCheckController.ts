import { Controller, Get, Route, Tags } from 'tsoa';

import {
  OkResponse,
  OkResponseSchema,
} from '@/http/responses/global/okResponse';
import { HEALTH_CHECK_TAG_NAME } from '@/openapi/tags';

@Route('health-check')
export class healthCheckController extends Controller {
  /**
   * アプリケーションヘルスチェック用エンドポイント<br>
   * status は ok のみを返す
   *
   * @summary アプリケーションヘルスチェック
   */
  @Get()
  @Tags(HEALTH_CHECK_TAG_NAME)
  public async healthCheck(): Promise<OkResponseSchema> {
    return new OkResponse().toJson();
  }
}
