import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { getUser, signOut } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      const user = await getUser();
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, email, phone")
          .eq("id", user.id)
          .single();
        if (data) setProfile(data);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    const user = await getUser();
    if (!user) return;
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: profile.full_name, phone: profile.phone })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast({
        title: "Error",
        description: "Failed to update profile.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated.",
        variant: "default",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/login";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-2 md:px-0">
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 w-full max-w-lg border border-purple-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, #e9d5ff 0%, transparent 70%)",
            }}
          />
          <div className="flex flex-col items-center mb-6 relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-extrabold shadow-lg mb-2 border-4 border-white">
              {profile.full_name
                ? profile.full_name.charAt(0).toUpperCase()
                : profile.email
                ? profile.email.charAt(0).toUpperCase()
                : "U"}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
              My Profile
            </h2>
            <div className="text-sm text-gray-500">
              Manage your account information
            </div>
          </div>
          <hr className="my-4 border-purple-100" />
          {loading ? (
            <div className="text-center text-gray-500 py-12">Loading...</div>
          ) : (
            <form onSubmit={handleSave} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-semibold mb-1 text-purple-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="w-full border border-purple-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none text-lg"
                  value={profile.full_name}
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
                  value={profile.email}
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
                  value={profile.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-semibold shadow"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          )}
          <hr className="my-6 border-purple-100" />
          <Button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white text-lg font-semibold shadow"
            variant="outline"
          >
            Logout
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
