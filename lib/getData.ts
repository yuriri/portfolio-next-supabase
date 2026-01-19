// Supabaseからデータを取得
import { createClient } from "@/lib/supabase/server";
import { jobType, workType } from "@/types/job.types";

export default async function getDataFromSupabase (slug: string) {
	const supabase = await createClient();
  const { data } = await supabase.from(slug).select();
	return data;
}

// export default getDataFromSupabase;