import StampReceipt from "../assets/sign-receipt.jpeg";

export const ReceiptAmountNumberSignFeature = ({
  contentPrice,
  contentDate,
}) => {
  return (
    <div className="mt-16 flex justify-between items-center">
      <div className="h-max py-1 border border-[#111827]">
        <p className="w-max px-2 pb-4 font-semibold bg-[#FEF08A]">
          Amount IDR. <span> {contentPrice}</span>
        </p>
      </div>

      <div className="font-semibold flex flex-col items-center gap-5">
        <p>Jakarta, {contentDate}</p>
        <img src={StampReceipt} alt="Stamp Receipt" className="w-32 mt-4" />
        <p>Golden Bird Jakarta</p>
      </div>
    </div>
  );
};
