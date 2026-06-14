export const ReceiptContentFeature = ({ contentTitle, contentDescription }) => {
  return (
    <span className="w-full flex gap-4">
      <p className="w-40 font-semibold">{contentTitle}</p>
      <p className="capitalize">: {contentDescription}</p>
    </span>
  );
};
