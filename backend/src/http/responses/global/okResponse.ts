/**
 * The Global OK Response
 *
 * @example {
 *  "status": "ok"
 * }
 */
export interface OkResponseSchema {
  /**
   * アプリケーションステータス
   */
  status: string;
}

export class OkResponse {
  status: string;

  constructor() {
    this.status = 'ok';
  }

  toJson(): OkResponseSchema {
    return {
      status: this.status,
    };
  }
}
