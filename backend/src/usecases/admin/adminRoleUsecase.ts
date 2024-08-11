import { injectable, singleton } from 'tsyringe';

import { adminRoleRepository } from '@/repositories/admin/adminRoleRepository';

@singleton()
@injectable()
export class adminRoleUsecase {
  constructor(private _adminRoleRepository: adminRoleRepository) {
    this._adminRoleRepository = _adminRoleRepository;
  }

  public async test() {
    console.log('test1');
    await this._adminRoleRepository.create();
  }
}
