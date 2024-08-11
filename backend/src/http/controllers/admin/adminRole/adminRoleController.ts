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
// import { adminRoleUsecase } from '@/usecases/admin/adminRoleUsecase';

// @injectable()
@Route('admin/admin-roles')
export class adminRoleController extends Controller {
  // constructor(private _adminRoleUsecase: adminRoleUsecase) {
  //   super();

  //   this._adminRoleUsecase = _adminRoleUsecase;
  // }

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
    // await this._adminRoleUsecase.test();
    return res(200, new OkResponse().toJson());
  }
}
