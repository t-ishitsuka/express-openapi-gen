import { singleton } from 'tsyringe';

@singleton()
export class adminRoleRepository {
  public async test2() {
    console.log('test2');
  }
}
