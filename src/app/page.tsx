import Home from "./home/Home";
import { FooterLinks } from "@/components/Footer";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
export default async function Page() {
  const cookieStore = cookies();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  // const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, count } = await supabase
    .from("courses")
    .select("id", { count: "exact" })
    .range(0, 10);
  // .order("price", { ascending: false })
  // .eq("category_name", "Marketing")
  // .gte("star", 4);

  // .or("category_name.eq.Marketing");

  return (
    <pre>
      {JSON.stringify(data, null, 2)} {count}
    </pre>
  );
  // return (
  //   <>
  //     <Home />
  //     <FooterLinks />
  //   </>
  // );
}
