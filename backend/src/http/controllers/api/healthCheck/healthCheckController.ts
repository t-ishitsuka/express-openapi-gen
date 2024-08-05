import { HEALTH_CHECK_TAG_NAME } from "@/openapi/tags";
import { Controller, Get, Route, Tags } from "tsoa";

@Route('health-check')
export class healthCheckController extends Controller {

  @Get()
  @Tags(HEALTH_CHECK_TAG_NAME)
  public async healthCheck() {
    return {
      status: 'ok'
    }
  }
}
