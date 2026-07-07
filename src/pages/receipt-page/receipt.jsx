import { ReceiptBannerLayout } from "../../layouts/receipt-banner-layout";
import { ReceiptContentLayout } from "../../layouts/receipt-content-layout";

export const Receipt = ({ className, ref, ...props }) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`${`w-w-pdf h-h-pdf mt-4 mx-auto font-times-new-roman text-[#111827] bg-[#ffffff]`} || ${className}`}
    >
      <ReceiptBannerLayout />

      <main className="px-16">
        <ReceiptContentLayout />
      </main>
    </div>
  );
};
