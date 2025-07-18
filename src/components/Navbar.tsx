import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  ShoppingCart,
  LogIn,
  User as UserIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getUser } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { getCartItems } from "@/lib/cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    async function fetchUserAndProfile() {
      const u = await getUser();
      setUser(u);
      if (u) {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, email")
          .eq("id", u.id)
          .single();
        if (data) {
          const name = data.full_name || data.email || "";
          setUserInitial(name.charAt(0).toUpperCase());
        } else {
          setUserInitial(u.email ? u.email.charAt(0).toUpperCase() : "U");
        }
      } else {
        setUserInitial(null);
      }
    }
    fetchUserAndProfile();
  }, []);

  // Fetch cart count
  useEffect(() => {
    let isMounted = true;
    async function fetchCartCount() {
      const { data } = await getCartItems();
      if (isMounted) setCartCount((data || []).length);
    }
    fetchCartCount();
    // Optionally, poll every 5 seconds for real-time update
    const interval = setInterval(fetchCartCount, 5000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-purple-100">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-purple-600" />
              <span className="text-gray-700">{siteConfig.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-purple-600" />
              <span className="text-gray-700">{siteConfig.email}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-purple-600 font-medium">
              Get 20% OFF on your first order!
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Login/Profile Icon */}
            {user ? (
              <Link
                to="/profile"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg">
                  {userInitial || "U"}
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 text-sm font-semibold">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 px-4 pt-2">
                <Link
                  to="/cart"
                  className="relative text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                      {cartCount}
                    </span>
                  )}
                </Link>
                {user ? (
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg">
                      {userInitial || "U"}
                    </span>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 text-sm font-semibold">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
