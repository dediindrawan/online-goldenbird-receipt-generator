import { useEffect, useState } from "react";

export const useDisplayInputField = () => {
  const [displayCustomerName, setDisplayCustomerName] = useState("");
  const [displayAmountWords, setDisplayAmountWords] = useState("");
  const [displayBookingCode, setDisplayBookingCode] = useState("");
  const [displayPeriodeUsage, setDisplayPeriodeUsage] = useState("");
  const [displayNoteExplanation, setDisplayNoteExplanation] = useState("");
  const [displayAmountNumber, setDisplayAmountNumber] = useState(0);
  const [displaySignTypeDate, setDisplaySignTypeDate] = useState("");

  useEffect(() => {
    const parseStorageItem = (key, fallback = "") => {
      const value = localStorage.getItem(key);

      if (!value) return fallback;

      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    };

    const loadContent = () => {
      // Format tanggal hanya untuk kebutuhan display
      const rawPeriodeUsage = localStorage.getItem("Saved_Periode_Usage");

      const formattedPeriodeUsage = rawPeriodeUsage
        ? new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(rawPeriodeUsage))
        : "";

      setDisplayCustomerName(parseStorageItem("Saved_Customer_Name"));

      setDisplayAmountWords(parseStorageItem("Saved_Amount_Words"));

      setDisplayBookingCode(parseStorageItem("Saved_Booking_Code"));

      setDisplayPeriodeUsage(formattedPeriodeUsage);

      setDisplayNoteExplanation(parseStorageItem("Saved_Note_Explanation"));

      setDisplayAmountNumber(parseStorageItem("Saved_Amount_Number", 0));

      setDisplaySignTypeDate(parseStorageItem("Saved_Sign_Type_Date"));
    };

    loadContent();

    window.addEventListener("storage", loadContent);

    return () => {
      window.removeEventListener("storage", loadContent);
    };
  }, []);

  return {
    displayCustomerName,
    displayAmountWords,
    displayBookingCode,
    displayPeriodeUsage,
    displayNoteExplanation,
    displayAmountNumber,
    displaySignTypeDate,
  };
};
