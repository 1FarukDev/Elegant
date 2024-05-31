import { createClient } from "@/utils/supabase/server";

export default async function getUserProfile(userId: any) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("user_profile")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
  console.log(data);

  return data;
}
