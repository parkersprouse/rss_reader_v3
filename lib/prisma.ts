/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-unnecessary-condition -- auto-generated */
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = (): PrismaClient => new PrismaClient();

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
/* eslint-enable @typescript-eslint/naming-convention, @typescript-eslint/no-unnecessary-condition */
