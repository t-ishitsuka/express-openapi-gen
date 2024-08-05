import { Swagger } from "tsoa"

export const HEALTH_CHECK_TAG_NAME = 'HealthCheck';

export const HEALTH_CHECK_TAG: Swagger.Tag = {
  name: HEALTH_CHECK_TAG_NAME,
  description: 'APIヘルスチェック',
}

export const OPENAPI_TAGS = [
  HEALTH_CHECK_TAG,
]
