import { supabase } from "./supabaseClient";

// Signup
export async function signUp(email: string, password: string) {
  return await supabase.auth.signUp({ email, password });
}

// Login
export async function signIn(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// Logout
export async function signOut() {
  return await supabase.auth.signOut();
}

// Get current user
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
