import { useState } from "react";

const getStorageValue = (key, fallback = "") => {
  const value = localStorage.getItem(key);

  if (!value) return fallback;

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const saveStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("local-storage"));
};

export const useInputField = () => {
  const [customerName, setCustomerName] = useState(() =>
    getStorageValue("Saved_Customer_Name"),
  );

  const [amountWords, setAmountWords] = useState(() =>
    getStorageValue("Saved_Amount_Words"),
  );

  const [bookingCode, setBookingCode] = useState(() =>
    getStorageValue("Saved_Booking_Code"),
  );

  // input[type="date"] harus tetap YYYY-MM-DD
  const [periodeUsage, setPeriodeUsage] = useState(
    () => localStorage.getItem("Saved_Periode_Usage") || "",
  );

  const [noteExplanation, setNoteExplanation] = useState(() =>
    getStorageValue("Saved_Note_Explanation"),
  );

  const [amountNumber, setAmountNumber] = useState(() =>
    getStorageValue("Saved_Amount_Number", 0),
  );

  const [signTypeDate, setSignTypeDate] = useState(() =>
    getStorageValue("Saved_Sign_Type_Date"),
  );

  const inputCustomerNameHandleChange = (e) => {
    const value = e.target.value;

    saveStorageValue("Saved_Customer_Name", value);
    setCustomerName(value);
  };

  const inputAmountWordsHandleChange = (e) => {
    const value = e.target.value;

    saveStorageValue("Saved_Amount_Words", value);
    setAmountWords(value);
  };

  const inputBookingCodeHandleChange = (e) => {
    const value = e.target.value;

    saveStorageValue("Saved_Booking_Code", value);
    setBookingCode(value);
  };

  const inputPeriodeUsageHandleChange = (e) => {
    const value = e.target.value;
    const date = new Date(value);

    // Untuk date picker
    localStorage.setItem("Saved_Periode_Usage", value);
    setPeriodeUsage(value);

    // Untuk display signature
    const formattedSignTypeDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);

    saveStorageValue("Saved_Sign_Type_Date", formattedSignTypeDate);

    setSignTypeDate(formattedSignTypeDate);
  };

  const inputNoteExplanationHandleChange = (e) => {
    const value = e.target.value;

    saveStorageValue("Saved_Note_Explanation", value);
    setNoteExplanation(value);
  };

  const inputAmountNumberHandleChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");

    const formattedValue = new Intl.NumberFormat("id-ID").format(numericValue);

    saveStorageValue("Saved_Amount_Number", formattedValue);

    setAmountNumber(formattedValue);
  };

  return {
    customerName,
    amountWords,
    bookingCode,
    periodeUsage,
    noteExplanation,
    amountNumber,
    signTypeDate,
    inputCustomerNameHandleChange,
    inputAmountWordsHandleChange,
    inputBookingCodeHandleChange,
    inputPeriodeUsageHandleChange,
    inputNoteExplanationHandleChange,
    inputAmountNumberHandleChange,
  };
};
