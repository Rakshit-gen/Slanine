import { NextRequest, NextResponse } from 'next/server';
import { ratelimit } from '@/lib/ratelimit';  // Adjust the import path as necessary

export async function GET(request: NextRequest) {
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  const { success, limit, remaining, reset } = await ratelimit.limit(`test_${ip}`);

  if (!success) {
    return NextResponse.json({
      message: 'Rate limit exceeded',
      limit,
      remaining,
      reset,
    }, { status: 429 });
  } else {
    return NextResponse.json({
      message: 'Request successful',
      limit,
      remaining,
      reset,
    }, { status: 200 });
  }
}