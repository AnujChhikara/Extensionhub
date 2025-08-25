import { getPrismaClient } from './db';

export async function testDatabaseConnection() {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      console.error('❌ Prisma client not available');
      return false;
    }

    await prisma.$connect();
    console.log('✅ Database connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}

export async function getDatabaseInfo() {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return {
        status: 'error',
        message: 'Prisma client not available',
        timestamp: new Date().toISOString(),
      };
    }

    await prisma.$connect();
    return {
      status: 'connected',
      message: 'Database connection successful',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error('❌ Failed to get database info:', error);
    return {
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    };
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}
