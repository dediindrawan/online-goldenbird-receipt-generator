import { ReceiptNavigationLayout } from "../../layouts/receipt-navigation-layout";
import { useRef } from "react";
import { Receipt } from "./receipt";
import { useReceiptPdfDownload } from "../../hooks/use-receipt-pdf-download";

export const ReceiptPage = () => {
  const receiptRef = useRef(null);
  const downloadPDF = useReceiptPdfDownload();

  return (
    <div>
      <ReceiptNavigationLayout
        receiptRef={receiptRef}
        onClick={() => downloadPDF(receiptRef)}
      />

      <Receipt ref={receiptRef} />
    </div>
  );
};
