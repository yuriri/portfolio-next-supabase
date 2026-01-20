// Supabaseからデータを取得
import { createClient } from "@/lib/supabase/server";
import { jobTypeAll, workType } from "@/types/job.types";

export default async function getDataFromSupabase<T = jobTypeAll | workType>(slug: string): Promise<T[]> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select();
  return (data || []) as T[];
}

// export default getDataFromSupabase;