import { Controller, Get, Route } from "tsoa";

@Route('health-check')
export class healthCheckController extends Controller {

  @Get()
  public async healthCheck() {
    return {
      status: 'ok'
    }
  }
}