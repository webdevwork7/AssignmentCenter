import { useEffect, useState } from "react";
import { getCartItems, updateCartItem, removeCartItem } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getUser } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [removingId, setRemovingId] = useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await getCartItems();
    setItems(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Removed page increment/decrement logic

  const handleIncrementQuantity = async (id, quantity) => {
    setUpdatingId(id);
    await updateCartItem(id, { quantity: quantity + 1 });
    await fetchItems();
    setUpdatingId(null);
  };

  const handleDecrementQuantity = async (id, quantity) => {
    if (quantity <= 1) return;
    setUpdatingId(id);
    await updateCartItem(id, { quantity: quantity - 1 });
    await fetchItems();
    setUpdatingId(null);
  };

  const handleRemove = async (id) => {
    setRemovingId(id);
    await removeCartItem(id);
    await fetchItems();
    setRemovingId(null);
  };

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleProceedToCheckout = async () => {
    const user = await getUser();
    if (!user) {
      toast({
        title: "Please login to order",
        description: "You must be logged in to place an order.",
        variant: "destructive",
      });
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="flex-1 max-w-2xl mx-auto w-full pt-24 pb-12 px-2 md:px-0">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow">
          Your Cart
        </h2>
        {loading ? (
          <div className="text-center text-lg text-gray-500 py-12">
            Loading...
          </div>
        ) : items.length === 0 ? (
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
          <div className="space-y-8">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-purple-100 hover:shadow-2xl transition-shadow"
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
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Copies</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleDecrementQuantity(item.id, item.quantity || 1)
                      }
                      disabled={
                        updatingId === item.id || (item.quantity || 1) <= 1
                      }
                    >
                      -
                    </Button>
                    <span className="px-2 font-semibold text-lg">
                      {item.quantity || 1}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleIncrementQuantity(item.id, item.quantity || 1)
                      }
                      disabled={updatingId === item.id}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleRemove(item.id)}
                    disabled={removingId === item.id}
                    className="mt-2"
                  >
                    Remove
                  </Button>
                </div>
                <div className="flex flex-col items-end min-w-[120px]">
                  <div className="font-bold text-green-700 text-2xl mb-1">
                    INR{" "}
                    {((item.price || 0) * (item.quantity || 1)).toLocaleString(
                      "en-IN"
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    ({item.quantity || 1} × {item.price || 0} per set)
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-end items-end md:items-center gap-4 mt-10 border-t pt-6">
              <div className="text-2xl font-extrabold text-purple-700">
                Total: INR {total.toLocaleString("en-IN")}
              </div>
              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 text-lg font-semibold shadow-md"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
