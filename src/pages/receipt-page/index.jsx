import { ReceiptNavigationLayout } from "../../layouts/receipt-navigation-layout";
import { useRef } from "react";
import { Receipt } from "./receipt";
import { useReceiptPdfDownload } from "../../hooks/use-receipt-pdf-download";

export const ReceiptPage = () => {
  const receiptRef = useRef(null);
  const downloadPDF = useReceiptPdfDownload();

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <ReceiptNavigationLayout
        receiptRef={receiptRef}
        onClick={() => downloadPDF(receiptRef)}
      />

      <Receipt
        ref={receiptRef}
        style={{
          position: "fixed",
          left: "-10000px",
          top: 0,
        }}
      />
      <Receipt />
    </div>
  );
};
