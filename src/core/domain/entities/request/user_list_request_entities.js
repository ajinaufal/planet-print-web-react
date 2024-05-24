export class UserListRequestEntities {
  constructor(data) {
    this.search = data?.search;
    this.page = data?.page;
    this.size = data?.size;
  }
}
