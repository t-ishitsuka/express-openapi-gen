// import { Controller, Get, OperationId, Route, Tags } from 'tsoa';

// import {
//   OkResponse,
//   OkResponseSchema,
// } from '@/http/responses/global/okResponse';
// import { ADMIN_ROLES_TAG_NAME } from '@/openapi/tags';

// @Route('admin/admin-roles')
// export class adminRoleController extends Controller {
//   /**
//    * わからねー
//    *
//    * @summary 管理画面ロール一覧取得
//    */
//   @Get('')
//   @OperationId('findDomain1')
//   @Tags(ADMIN_ROLES_TAG_NAME)
//   public async index(): Promise<OkResponseSchema> {
//     return await new OkResponse().toJson();
//   }
// }
