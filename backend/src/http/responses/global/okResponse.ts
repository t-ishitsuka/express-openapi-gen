/**
 * 共通OKレスポンス
 */
export interface OkResponseSchema {
  /**
   * アプリケーションステータス
   *
   * @example "ok"
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
