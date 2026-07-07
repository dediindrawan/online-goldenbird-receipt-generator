import { InputFormGroup } from "./form-page";
import { TemplateMessageLayout } from "../layouts/template-message-layout";
import { HeaderRootLayout } from "../layouts/header-root-layout";
import { FooterRootLayout } from "../layouts/footer-root-layout";
import { Button } from "../components/button";
import { useReceiptPdfDownload } from "../hooks/use-receipt-pdf-download";
import { Receipt } from "./receipt-page/receipt";
import { useRef } from "react";
import { Download } from "lucide-react";
import { ExampleReceiptLayout } from "../layouts/example-receipt-layout";

export const RootPage = () => {
  const receiptRef = useRef(null);
  const downloadPDF = useReceiptPdfDownload();

  return (
    <div className="max-w-4xl mx-auto pt-8 px-4">
      <HeaderRootLayout />

      <main>
        <div className="w-full flex flex-col items-center gap-5 sm:flex-row sm:items-stretch">
          <InputFormGroup />
          <ExampleReceiptLayout />
        </div>

        <span className="w-full mt-12 flex flex-col-reverse justify-start gap-8 sm:flex-row sm:justify-between sm:gap-0">
          <Button
            className="w-full flex justify-center items-center gap-2 sm:max-w-52"
            onClick={() => downloadPDF(receiptRef)}
          >
            <Download size={16} className="-mt-1" /> Download Receipt
          </Button>
        </span>

        <Receipt className="" ref={receiptRef} className="fixed -left-full" />

        <TemplateMessageLayout />
      </main>

      <FooterRootLayout />
    </div>
  );
};
