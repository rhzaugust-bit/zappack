import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      service: 'ZapPack API',
      version: '1.0.0',
      environment: process.env.NODE_ENV,
      features: {
        payments: 'mock',
        downloads: 'active',
      },
    },
    { status: 200 },
  );
}
