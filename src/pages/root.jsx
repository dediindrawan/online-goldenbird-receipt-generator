import { InputFormGroup } from "./form-page";
import { TemplateMessageLayout } from "../layouts/template-message-layout";
import { HeaderRootLayout } from "../layouts/header-root-layout";
import { FooterRootLayout } from "../layouts/footer-root-layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const RootPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8">
      <HeaderRootLayout />

      <main>
        <InputFormGroup />
        <span className="w-full mt-12 flex justify-end">
          <Link
            to={"/receipt-preview"}
            className="underline flex justify-end items-center gap-1 text-blue-600 hover:no-underline"
          >
            Receipt Preview then Download as PDF <ArrowRight size={14} />
          </Link>
        </span>
        <TemplateMessageLayout />
      </main>

      <FooterRootLayout />
    </div>
  );
};
