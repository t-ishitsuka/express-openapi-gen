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
import { GET_ADMIN_ROLES_OPERATION } from '@/openapi/operationIds';
import { ADMIN_ROLES_TAG_NAME } from '@/openapi/tags';

@Route('admin/admin-roles')
export class adminRoleController extends Controller {
  /**
   * 管理画面ロール一覧を取得する<br>
   * (ページネーション)
   *
   * @summary 管理画面ロール一覧取得
   */
  @Get()
  @OperationId(GET_ADMIN_ROLES_OPERATION)
  @Tags(ADMIN_ROLES_TAG_NAME)
  public async index(
    @Res() res: TsoaResponse<200, OkResponseSchema>,
  ): Promise<OkResponseSchema> {
    return res(200, new OkResponse().toJson());
  }
}
