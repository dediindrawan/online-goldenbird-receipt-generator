import StampReceipt from "../assets/sign-receipt.jpeg";

export const ReceiptAmountNumberSignFeature = ({
  contentPrice,
  contentDate,
}) => {
  return (
    <div className="mt-16 flex justify-between items-center">
      <span className="py-1 border border-gray-500">
        <p className="w-max px-2 font-semibold bg-yellow-200">
          Amount IDR. <span> {contentPrice}</span>
        </p>
      </span>
      <span className="font-semibold flex flex-col items-center gap-6">
        <p>Jakarta, {contentDate}</p>
        <img src={StampReceipt} alt="Stamp Receipt" className="w-32" />
        <p>Golden Bird Jakarta</p>
      </span>
    </div>
  );
};
