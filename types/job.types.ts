import { Tables } from "@/types/database.types";
import { z } from 'zod';


export type jobTypeAll = Tables<"jobs">;
export type jobTypeShort = {
  created_at: string
  description: string | null
  "end-date": string | null
  id: number
  name: string
  skills: string[] | null
  slug: string
  "start-date": string | null
}


export type workType = Tables<"works">;
