import { supabase } from "./supabaseClient";
import { getUser } from "./auth";

// Get or generate guest_id for non-logged-in users
function getGuestId() {
  let guestId = localStorage.getItem("guest_id");
  if (!guestId) {
    guestId = crypto.randomUUID();
    localStorage.setItem("guest_id", guestId);
  }
  return guestId;
}

// Add item to cart
export async function addCartItem(item) {
  const user = await getUser();
  const payload = {
    ...item,
    user_id: user ? user.id : null,
    guest_id: user ? null : getGuestId(),
  };
  return supabase.from("cart").insert([payload]);
}

// Get all cart items for current user/guest
export async function getCartItems() {
  const user = await getUser();
  if (user) {
    return supabase.from("cart").select("*").eq("user_id", user.id);
  } else {
    return supabase.from("cart").select("*").eq("guest_id", getGuestId());
  }
}

// Update a cart item (e.g., change pages)
export async function updateCartItem(id, updates) {
  return supabase.from("cart").update(updates).eq("id", id);
}

// Remove a cart item
export async function removeCartItem(id) {
  return supabase.from("cart").delete().eq("id", id);
}
