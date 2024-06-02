// action.ts
import { supabase } from "@/utils/supabase/client";
import getUserProfile from "@/api/users/user";

interface FormData {
  email: string;
  password: string;
}

export async function login(formData: FormData): Promise<any> {
  const { email, password } = formData;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw error; // Re-throw for upper level handling
  }

  const { id } = data.user;
  getUserProfile(id);

  return data; // Assuming you want to return the user data
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
