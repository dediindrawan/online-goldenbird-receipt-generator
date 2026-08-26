import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";

export const AuthCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const handleAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (session) {
        navigate("/", { replace: true });
        return;
      }

      navigate("/login", { replace: true });
    };

    handleAuth();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  return (
    <main>
      <p>Login verification...</p>
    </main>
  );
};
