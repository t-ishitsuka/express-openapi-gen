import {
  Controller,
  Get,
  OperationId,
  Res,
  Route,
  Tags,
  TsoaResponse,
} from 'tsoa';

import {
  OkResponse,
  OkResponseSchema,
} from '@/http/responses/global/okResponse';
import { HEALTH_CHECK_OPERATION } from '@/openapi/operationIds';
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
  @OperationId(HEALTH_CHECK_OPERATION)
  @Tags(HEALTH_CHECK_TAG_NAME)
  public async healthCheck(
    @Res() res: TsoaResponse<200, OkResponseSchema>,
  ): Promise<OkResponseSchema> {
    return res(200, new OkResponse().toJson());
  }
}
