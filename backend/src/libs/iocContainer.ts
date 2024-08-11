import { PrismaClient } from '@prisma/client';
import { IocContainer } from '@tsoa/runtime';
import { container } from 'tsyringe';

import { prisma } from '@/libs/prisma/implementation';

export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => {
    container.register<PrismaClient>('PrismaClient', {
      useValue: prisma,
    });

    return container.resolve<T>(controller as never);
  },
};
