import { useState } from "react";

export const useInputFiled = () => {
  const [customerName, setCustomerName] = useState("");
  const [amountWords, setAmountWords] = useState("");
  const [bookingCode, setBookingCode] = useState("");
  const [periodeUsage, setPeriodeUsage] = useState("");
  const [noteExplanation, setNoteExplanation] = useState("");
  const [amountNumber, setAmountNumber] = useState(0);
  const [signTypeDate, setSignTypeDate] = useState("");

  const inputCustomerNameHandleChange = (e) => {
    const rawValue = e.target.value;

    const STORAGE_KEY = "Saved_Customer_Name";
    const parsedSaveCustomerName = JSON.stringify(rawValue);
    localStorage.setItem(STORAGE_KEY, parsedSaveCustomerName);

    setCustomerName(rawValue);
  };

  const inputAmountWordsHandleChange = (e) => {
    const rawValue = e.target.value;

    const STORAGE_KEY = "Saved_Amount_Words";
    const parsedSaveAmountWords = JSON.stringify(rawValue);
    localStorage.setItem(STORAGE_KEY, parsedSaveAmountWords);

    setAmountWords(rawValue);
  };

  const inputBookingCodeHandleChange = (e) => {
    const rawValue = e.target.value;

    const STORAGE_KEY = "Saved_Booking_Code";
    const parsedSaveBookingCode = JSON.stringify(rawValue);
    localStorage.setItem(STORAGE_KEY, parsedSaveBookingCode);

    setBookingCode(rawValue);
  };

  const inputPeriodeUsageHandleChange = (e) => {
    const rawValue = e.target.value;
    const rawDate = new Date(rawValue);

    const formattedSignTypeDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(rawDate);

    const STORAGE_KEY_VALUE = "Saved_Sign_Type_Date";
    const parsedSaveSignTypeDate = JSON.stringify(formattedSignTypeDate);
    localStorage.setItem(STORAGE_KEY_VALUE, parsedSaveSignTypeDate);

    setSignTypeDate(rawValue);

    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(rawDate);

    const STORAGE_KEY = "Saved_Periode_Usage";
    const parsedSavePeriodeUsage = JSON.stringify(formatted);
    localStorage.setItem(STORAGE_KEY, parsedSavePeriodeUsage);

    setPeriodeUsage(rawValue);
  };

  const inputNoteExplanationHandleChange = (e) => {
    const rawValue = e.target.value;

    const STORAGE_KEY = "Saved_Note_Explanation";
    const parsedSaveNoteExplanation = JSON.stringify(rawValue);
    localStorage.setItem(STORAGE_KEY, parsedSaveNoteExplanation);

    setNoteExplanation(rawValue);
  };

  const inputAmountNumberHandleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formatted = new Intl.NumberFormat("id-ID").format(rawValue);

    const STORAGE_KEY = "Saved_Amount_Number";
    const parsedSaveAmount = JSON.stringify(formatted);
    localStorage.setItem(STORAGE_KEY, parsedSaveAmount);

    setAmountNumber(formatted);
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
