import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getCartItems, removeCartItem, clearCart } from "@/lib/cart";
import { getUser } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RoOywKA82aMgYJAfJufkqLLvVVKvUuY20UtOMvZA6KOpt5cPEpxXEDxWJe7NkHut8N1FW0kmlscTkTdHumoWKn20051rJVS6C"
); // Dummy test key

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await getCartItems();
      setCart(data || []);
      const user = await getUser();
      setIsLoggedIn(!!user);
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, email, phone")
          .eq("id", user.id)
          .single();
        if (profile) setUserDetails(profile);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast({
        title: "Please login to order",
        description: "You must be logged in to place an order.",
        variant: "destructive",
      });
      return;
    }
    setPlacing(true);
    const user = await getUser();
    if (!user) {
      toast({
        title: "Please login to order",
        description: "You must be logged in to place an order.",
        variant: "destructive",
      });
      setPlacing(false);
      return;
    }
    try {
      // Get Supabase access token
      const { data } = await supabase.auth.getSession();
      const accessToken = data?.session?.access_token;
      // Call Supabase Edge Function for Stripe session
      const response = await fetch(
        "https://xdtyxlderzfqytpsvtrc.functions.supabase.co/create-stripe-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          },
          body: JSON.stringify({
            cart,
            email: userDetails.email,
          }),
        }
      );
      const dataRes = await response.json();
      if (dataRes.id) {
        const stripe = await stripePromise;
        await clearCart(); // Clear the cart before redirecting
        await stripe.redirectToCheckout({ sessionId: dataRes.id });
      } else {
        throw new Error(dataRes.error || "Could not create Stripe session");
      }
    } catch (err) {
      toast({
        title: "Stripe Error",
        description: err.message,
        variant: "destructive",
      });
    }
    setPlacing(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-2 md:px-0">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 w-full max-w-2xl border border-purple-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, #e9d5ff 0%, transparent 70%)",
            }}
          />
          {/* Stepper Bar */}
          <div className="flex items-center justify-center gap-4 mb-8 relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
              <span className="text-xs mt-1 text-purple-700 font-semibold">
                Cart
              </span>
            </div>
            <div className="w-10 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <span className="text-xs mt-1 text-green-700 font-semibold">
                Order
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center mb-6 relative z-10">
            <h2 className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 tracking-tight">
              Order Summary
            </h2>
            <div className="text-sm text-gray-500">
              Review your order and provide your details
            </div>
          </div>
          <hr className="my-4 border-purple-100" />
          {loading ? (
            <div className="text-center text-gray-500 py-12">Loading...</div>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <svg
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-purple-300 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
                />
              </svg>
              <div className="text-xl font-semibold text-gray-500 mb-2">
                Your cart is empty
              </div>
              <div className="text-gray-400">
                Add some assignments to get started!
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cart.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-purple-100"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block px-2 py-1 rounded bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
                          {item.service_type}
                        </span>
                      </div>
                      <div className="font-semibold text-lg text-gray-900 truncate">
                        {item.subject}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Deadline:{" "}
                        <span className="font-medium text-gray-700">
                          {item.deadline}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>
                          Pages:{" "}
                          <span className="font-semibold text-gray-800">
                            {item.pages}
                          </span>
                        </span>
                        <span>
                          Copies:{" "}
                          <span className="font-semibold text-gray-800">
                            {item.quantity}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end min-w-[120px]">
                      <div className="font-bold text-green-700 text-xl mb-1">
                        INR{" "}
                        {(
                          (item.price || 0) * (item.quantity || 1)
                        ).toLocaleString("en-IN")}
                      </div>
                      <div className="text-xs text-gray-400">
                        ({item.quantity || 1} × {item.price || 0} per set)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-4 mb-8">
                <div className="text-2xl font-extrabold text-purple-700">
                  Total: INR {total.toLocaleString("en-IN")}
                </div>
              </div>
              <form
                onSubmit={handlePlaceOrder}
                className="space-y-8 relative z-10 bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border border-purple-100 shadow"
              >
                <div className="text-lg font-bold text-purple-700 mb-4">
                  Your Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-purple-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
                      value={userDetails.full_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-purple-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-purple-200 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed text-lg"
                      value={userDetails.email}
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-purple-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
                      value={userDetails.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg font-semibold shadow"
                  disabled={placing || !isLoggedIn}
                >
                  {placing ? "Placing Order..." : "Place Order"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
