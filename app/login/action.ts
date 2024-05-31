"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import getUserProfile from "@/api/users/user";

export async function login(formData: FormData) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const form = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(form);

  if (error) {
    console.log(error.message);
    redirect("/error");
  }
  console.log(data);
  const { id } = data.user;
  console.log(id, "id");

  getUserProfile(id);
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
