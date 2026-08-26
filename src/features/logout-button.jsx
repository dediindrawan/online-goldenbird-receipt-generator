import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { Button } from "../components/button";
import { LogOutIcon } from "lucide-react";

export const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error);
      setLoading(false);
      return;
    }

    navigate("/login", { replace: true });
  };

  return (
    <Button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="w-full flex justify-center items-center gap-2 sm:max-w-52"
      variant="tersier"
    >
      <LogOutIcon size={16} className="-mt-1" />{" "}
      {loading ? "Logging out..." : "Logout Account"}
    </Button>
  );
};
