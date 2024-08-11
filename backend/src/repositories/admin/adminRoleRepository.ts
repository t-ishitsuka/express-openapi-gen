// import { AdminRole, Prisma, PrismaClient } from '@prisma/client';
// import { inject, injectable, singleton } from 'tsyringe';

// @injectable()
// @singleton()
// export class adminRoleRepository {
//   constructor(@inject('PrismaClient') private prismaClient: PrismaClient) {}

//   public async create(): Promise<AdminRole> {
//     const test = {
//       name: 'test',
//     } as Prisma.AdminRoleCreateInput;

//     const adminRole = await this.prismaClient.adminRole.create({
//       data: test,
//     });

//     return adminRole;
//   }
// }
