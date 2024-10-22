import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server'

export async function GET(req: Request, res: NextResponse) {
    const supabase = createClient()

    const { data: courses, error } = await supabase
        .from('courses')
        .select('*')
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: courses });
}
