import { prisma } from './db';

export async function testDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getDatabaseInfo() {
  try {
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
    await prisma.$disconnect();
  }
}
