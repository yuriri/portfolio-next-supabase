// Supabaseからデータを取得
import { createClient } from "@/lib/supabase/server";
import { jobTypeAll, workType, skillType } from "@/types/job.types";

export async function getDataFromSupabase<T = jobTypeAll | workType>(slug: string): Promise<T[]> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select();
  return (data || []) as T[];
}

export async function getEachDataFromSupabase<T = jobTypeAll | workType>(slug: string, slugFromParam: string): Promise<T | null> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select().eq("slug", slugFromParam);
  // Supabaseは配列を返すので、最初の要素を取得
  if (data && data.length > 0) {
    return data[0] as T;
  }
  return null;
}


export  async function getSkillsDataFromSupabase<T = skillType>(slug: string, filterName: string = "",filterValue: string = ""): Promise<T[]> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select().eq(filterName, filterValue);
  return (data || []) as T[];
}
