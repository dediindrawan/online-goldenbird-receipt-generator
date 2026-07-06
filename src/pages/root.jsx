import { InputFormGroup } from "./form-page";
import { TemplateMessageLayout } from "../layouts/template-message-layout";
import { HeaderRootLayout } from "../layouts/header-root-layout";
import { FooterRootLayout } from "../layouts/footer-root-layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { useReceiptPdfDownload } from "../hooks/use-receipt-pdf-download";
import { Receipt } from "./receipt-page/receipt";
import { useRef } from "react";

export const RootPage = () => {
  const receiptRef = useRef(null);
  const downloadPDF = useReceiptPdfDownload();

  return (
    <div className="max-w-4xl mx-auto pt-8 px-4">
      <HeaderRootLayout />

      <main>
        <InputFormGroup />
        <span className="w-full mt-12 flex flex-col-reverse justify-start gap-8 sm:flex-row sm:justify-between sm:gap-0">
          <Button className="max-w-52" onClick={() => downloadPDF(receiptRef)}>
            Download Receipt
          </Button>

          <Link
            to={"/receipt-preview"}
            className="flex items-center gap-1 text-blue-600 transition-all duration-300 ease-in-out hover:gap-2"
          >
            Receipt Preview <ArrowRight size={14} />
          </Link>
        </span>

        <Receipt
          ref={receiptRef}
          style={{
            position: "fixed",
            left: "-10000px",
            top: 0,
            backgroundColor: "#ffffff",
            fontFamily: "Times New Roman",
          }}
        />

        <TemplateMessageLayout />
      </main>

      <FooterRootLayout />
    </div>
  );
};
