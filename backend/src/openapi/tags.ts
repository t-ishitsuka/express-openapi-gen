import { Swagger } from 'tsoa';

// Admin
export const ADMIN_ROLES_TAG_NAME = 'AdminRoles';

export const ADMIN_ROLES_TAG: Swagger.Tag = {
  name: ADMIN_ROLES_TAG_NAME,
  description: '管理画面ユーザーロール',
};

// Api
export const HEALTH_CHECK_TAG_NAME = 'HealthCheck';

export const HEALTH_CHECK_TAG: Swagger.Tag = {
  name: HEALTH_CHECK_TAG_NAME,
  description: 'APIヘルスチェック',
};

export const OPENAPI_TAGS = [ADMIN_ROLES_TAG, HEALTH_CHECK_TAG];
