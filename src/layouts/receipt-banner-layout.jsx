import BannerReceipt from "../assets/banner-receipt.jpeg";

export const ReceiptBannerLayout = () => {
  return (
    <header className="mb-10">
      <img src={BannerReceipt} alt="banner-receipt" className="w-full" />
      <h1 className="text-2xl mt-10 px-16 font-semibold">
        PT. PUSAKA PRIMA TRANSPORT
      </h1>
      <p className="px-16 text-xs">
        Jl. Mampang Prapatan Raya No.60 - Jakarta Selatan 12790 - INDONESIA -
        Telephone: (021) 7989000, 7989111 - Fax: (021) 7989102
      </p>
      <h3 className="mt-8 px-16 text-2xl font-semibold">RECEIPT</h3>
    </header>
  );
};
