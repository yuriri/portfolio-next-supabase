// Supabaseからデータを取得する関数
import { createClient } from "@/lib/supabase/server";
import { jobTypeAll, workType, skillType } from "@/types/job.types";

// worksとjobの一覧を取得 limitNumで表示する個数を設定
export async function getDataFromSupabase<T = jobTypeAll | workType>(slug: string, limitNum: number | null = null): Promise<T[]> {
  const supabase = await createClient();
  if (limitNum !== null) {
    const { data } = await supabase.from(slug).select().limit(limitNum);
    return (data || []) as T[];
  } else {
    const { data } = await supabase.from(slug).select();
    return (data || []) as T[];
  }
}

// 個別のデータを取得
export async function getEachDataFromSupabase<T = jobTypeAll | workType>(slug: string, slugFromParam: string): Promise<T | null> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select().eq("slug", slugFromParam);
  // Supabaseは配列を返すので、最初の要素を取得
  if (data && data.length > 0) {
    return data[0] as T;
  }
  return null;
}

// スキルデータを取得
export async function getSkillsDataFromSupabase<T = skillType>(slug: string, filterName: string = "", filterValue: string = ""): Promise<T[]> {
  const supabase = await createClient();
  const { data } = await supabase.from(slug).select().eq(filterName, filterValue);
  return (data || []) as T[];
}
