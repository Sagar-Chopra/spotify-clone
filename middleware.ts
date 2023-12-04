import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest){
    const res = NextResponse.next();
    const Supabase = createMiddlewareClient({
        req,
        res
    });

    await Supabase.auth.getSession();
    return res
}

