import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// 这是一个工厂函数，用于创建带类型的 Supabase 客户端
export const createClientComponentClient = (
  supabaseUrl: string,
  supabaseKey: string
) => {
  return createClient<Database>(supabaseUrl, supabaseKey);
};