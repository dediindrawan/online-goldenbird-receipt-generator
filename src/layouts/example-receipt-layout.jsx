import ExampleReceipt from "../assets/example-gb-receipt.jpeg";

export const ExampleReceiptLayout = () => {
  return (
    <figure className="max-w-1/2 flex flex-col items-center sm:w-1/3">
      <figcaption className="text-sm mb-1 text-yellow-600">Example</figcaption>
      <img
        src={ExampleReceipt}
        alt="example receipt"
        className="h-full rounded-md border border-gray-300 select-none"
      />
    </figure>
  );
};
