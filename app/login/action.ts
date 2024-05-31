// action.ts
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import getUserProfile from "@/api/users/user";

interface FormData {
  email: string;
  password: string;
}

export async function login(formData: FormData): Promise<void> {
  const { email, password } = formData;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  const { id } = data.user;
  getUserProfile(id)
}

export async function signup(formData: any) {

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error.message);
    // router.push("/error");
    return;
  }

  // router.push("/");
}
