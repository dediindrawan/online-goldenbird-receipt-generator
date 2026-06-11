import { useEffect, useState } from "react";

export const useDisplayInputField = () => {
  const [displayCustomerName, setDisplayCustomerName] = useState("");
  const [displayAmountWords, setDisplayAmountWords] = useState("");
  const [displayBookingCode, setDisplayBookingCode] = useState(0);
  const [displayPeriodeUsage, setDisplayPeriodeUsage] = useState("");
  const [displayNoteExplanation, setDisplayNoteExplanation] = useState("");
  const [displayAmountNumber, setDisplayAmountNumber] = useState(0);
  const [displaySignTypeDate, setDisplaySignTypeDate] = useState("");

  useEffect(() => {
    const loadContent = () => {
      const serializeCustomerName = localStorage.getItem("Saved_Customer_Name");
      const serializedAmountWords = localStorage.getItem("Saved_Amount_Words");
      const serializedBookingCode = localStorage.getItem("Saved_Booking_Code");
      const serializedPeriodeUsage = localStorage.getItem(
        "Saved_Periode_Usage",
      );
      const serializedNoteExplanation = localStorage.getItem(
        "Saved_Note_Explanation",
      );
      const serializedAmountNumber = localStorage.getItem(
        "Saved_Amount_Number",
      );
      const serializedSignTypeDate = localStorage.getItem(
        "Saved_Sign_Type_Date",
      );

      setDisplayCustomerName(JSON.parse(serializeCustomerName));
      setDisplayAmountWords(JSON.parse(serializedAmountWords));
      setDisplayBookingCode(JSON.parse(serializedBookingCode));
      setDisplayPeriodeUsage(JSON.parse(serializedPeriodeUsage));
      setDisplayNoteExplanation(JSON.parse(serializedNoteExplanation));
      setDisplayAmountNumber(JSON.parse(serializedAmountNumber));
      setDisplaySignTypeDate(JSON.parse(serializedSignTypeDate));
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
