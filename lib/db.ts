import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export const getPrismaClient = () => {
  try {
    return prisma;
  } catch (error) {
    console.error('Prisma client not available:', error);
    return null;
  }
};
