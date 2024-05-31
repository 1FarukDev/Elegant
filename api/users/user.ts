// api/users/getUserProfile.ts
import { supabase } from "@/utils/supabase/client";

interface UserProfile {
  id: string;
  email: string;
  // Add other fields from your `user_profile` table here
}

export default async function getUserProfile(
  userId: string
): Promise<UserProfile | null> {
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
  return data as UserProfile;
}
