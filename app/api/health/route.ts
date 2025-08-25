import { NextRequest, NextResponse } from 'next/server';
import { testDatabaseConnection, getDatabaseInfo } from '@/lib/db-test';

export async function GET(request: NextRequest) {
  try {
    const dbConnected = await testDatabaseConnection();
    const dbInfo = await getDatabaseInfo();

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: {
        connected: dbConnected,
        info: dbInfo,
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
      },
      { status: 500 }
    );
  }
}
