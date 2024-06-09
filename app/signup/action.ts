import { supabase } from "@/utils/supabase/client";

interface FormData {
  email: string;
  password: string;
  full_name?: string;
  username?: string;
}

export async function signup(formData: FormData) {
  const { email, password } = formData;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    return;
  }
  return data;
}
