import { ReceiptBannerLayout } from "../../layouts/receipt-banner-layout";
import { ReceiptContentLayout } from "../../layouts/receipt-content-layout";
import { ReceiptNavigationLayout } from "../../layouts/receipt-navigation-layout";
import { useRef } from "react";

export const ReceiptPage = () => {
  const receiptRef = useRef(null);

  return (
    <div className="font-times-new-roman">
      <ReceiptNavigationLayout receiptRef={receiptRef} />

      <div
        ref={receiptRef}
        className="w-w-pdf h-h-pdf my-4 mx-auto border border-yellow-600 text-gray-900 bg-white"
      >
        <ReceiptBannerLayout />

        <main className="px-16">
          <ReceiptContentLayout />
        </main>
      </div>
    </div>
  );
};
