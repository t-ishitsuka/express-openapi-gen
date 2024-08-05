export class OkResponse {
  status: string;

  constructor() {
    this.status = 'ok';
  }

  toJson() {
    return {
      status: this.status,
    };
  }
}
