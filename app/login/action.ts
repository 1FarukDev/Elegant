// action.ts
import { supabase } from "@/utils/supabase/client";
import getUserProfile from "@/api/users/user";
import { toast } from "react-toastify";

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
    console.error(error.status);
    if (error.status === 400) {
      console.log("error info");
      toast.error("Password or email is incorrect");
    } else toast.error(error.message);
    throw error; // Re-throw for upper level handling
  }
  toast.success("You are logged in");
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
