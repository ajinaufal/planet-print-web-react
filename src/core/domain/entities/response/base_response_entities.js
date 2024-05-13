export class BaseResponseEntities {
  constructor(data) {
    this.status = data?.status;
    this.data = data?.data;
    this.error_message = data?.error_message;
  }
}
