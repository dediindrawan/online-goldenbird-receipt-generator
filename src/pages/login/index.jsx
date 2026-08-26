import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../../utils/supabase.js";
import { InputLayout } from "../../layouts/input-layout.jsx";
import { Button } from "../../components/button.jsx";

const LOGIN_COOLDOWN = 60;
const LOGIN_COOLDOWN_KEY = "loginCooldownUntil";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [cooldown, setCooldown] = useState(() => {
    const cooldownUntil = Number(localStorage.getItem(LOGIN_COOLDOWN_KEY));

    if (!cooldownUntil) {
      return 0;
    }

    const remaining = Math.ceil((cooldownUntil - Date.now()) / 1000);

    return Math.max(remaining, 0);
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && event === "SIGNED_IN") {
        navigate("/", { replace: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    const cooldownUntil = Number(localStorage.getItem(LOGIN_COOLDOWN_KEY));

    if (cooldownUntil && cooldownUntil <= Date.now()) {
      localStorage.removeItem(LOGIN_COOLDOWN_KEY);
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setCooldown((current) => {
        if (current <= 1) {
          localStorage.removeItem(LOGIN_COOLDOWN_KEY);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [cooldown]);

  const startCooldown = () => {
    const cooldownUntil = Date.now() + LOGIN_COOLDOWN * 1000;

    localStorage.setItem(LOGIN_COOLDOWN_KEY, String(cooldownUntil));

    setCooldown(LOGIN_COOLDOWN);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    // Prevent request while cooldown is active
    if (cooldown > 0) {
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: normalizedEmail,

      options: {
        shouldCreateUser: false,

        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      if (error.status === 429) {
        startCooldown();

        setError("Too many login requests. Please wait before trying again.");

        return;
      }

      setError("Email is not registered or cannot be used for login.");

      return;
    }

    startCooldown();

    setMessage(
      "Login link has been sent to your email. Please check your email.",
    );
  };

  return (
    <main className="min-h-screen p-4 grid place-items-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-4 border border-yellow-600 rounded-md"
      >
        <h1 className="text-xl font-semibold sm:text-2xl">⚡ Welcome Back!</h1>

        <p className="mb-4">Please enter your verified account to login</p>

        <InputLayout
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@email.com"
          autoComplete="email"
          disabled={loading || cooldown > 0}
          required
        />

        {error && <small className="italic text-pink-500">{error}</small>}

        {message && <small className="italic text-green-500">{message}</small>}

        <Button
          type="submit"
          disabled={loading || cooldown > 0}
          className="mt-4"
        >
          {loading
            ? "Sending..."
            : cooldown > 0
              ? `Send Login Link in ${cooldown} ${
                  cooldown === 1 ? "Second" : "Seconds"
                }`
              : "Send Login Link"}
        </Button>
      </form>
    </main>
  );
};
