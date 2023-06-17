import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

import type { NextRequest } from 'next/server';
import type { Database } from '@/types_db';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  if (req.nextUrl.pathname === '/flags') {
    const segments = await get('segments');

    return NextResponse.json(segments);
  }

  // const supabase = createMiddlewareClient<Database>({ req, res });
  // await supabase.auth.getSession();
  return res;
}
