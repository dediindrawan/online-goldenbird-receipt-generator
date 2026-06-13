import { InputFormGroup } from "./form-page";
import { TemplateMessageLayout } from "../layouts/template-message-layout";
import { HeaderRootLayout } from "../layouts/header-root-layout";
import { FooterRootLayout } from "../layouts/footer-root-layout";
import { Link } from "react-router-dom";

export const RootPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 px-8">
      <HeaderRootLayout />

      <main>
        <InputFormGroup />
        <span className="w-full mt-12 inline-block text-right">
          <Link
            to={"/receipt-preview"}
            className="underline text-blue-600 hover:no-underline"
          >
            Receipt Preview then Download as PDF
          </Link>
        </span>
        <TemplateMessageLayout />
      </main>

      <FooterRootLayout />
    </div>
  );
};
