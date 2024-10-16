import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const cookieHeader = cookies();
    const myCookie = cookieHeader.get('isLogin');

    if (!myCookie) {
        return NextResponse.json({ error: 'Cookie not found' }, { status: 404 });
    }

    return NextResponse.json({ data: myCookie });
}
