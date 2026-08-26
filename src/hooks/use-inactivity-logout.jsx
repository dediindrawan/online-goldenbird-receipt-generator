import { useEffect, useRef } from "react";
import { supabase } from "../utils/supabase";

const INACTIVITY_TIMEOUT_MINUTES = 30;

const INACTIVITY_TIMEOUT = INACTIVITY_TIMEOUT_MINUTES * 60 * 1000;

const ACTIVITY_EVENTS = [
  "mousedown",
  "mousemove",
  "keydown",
  "scroll",
  "touchstart",
];

export const useInactivityLogout = (isAuthenticated) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const logout = async () => {
      await supabase.auth.signOut();
    };

    const resetTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(logout, INACTIVITY_TIMEOUT);
    };

    ACTIVITY_EVENTS.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      ACTIVITY_EVENTS.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [isAuthenticated]);
};
