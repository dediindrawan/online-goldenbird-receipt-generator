import { useDisplayInputField } from "../../hooks/UseDisplayInputField";
import BannerReceipt from "../../assets/banner-receipt.jpeg";
import SignReceipt from "../../assets/sign-receipt.jpeg";
import { Link } from "react-router-dom";

export const ReceiptPage = () => {
  const {
    displayCustomerName,
    displayAmountWords,
    displayBookingCode,
    displayPeriodeUsage,
    displayNoteExplanation,
    displayAmountNumber,
    displaySignTypeDate,
  } = useDisplayInputField();
  return (
    <div className="min-h-screen font-[Times_New_Roman] bg-gray-50">
      <nav className="w-screen font-poppins text-white bg-gray-800 fixed top-0">
        <ul className="py-4 px-20 flex justify-between">
          <li>
            <Link to={"/"}>Back</Link>
          </li>
          <li>
            <Link to={"/"}>Download as PDF</Link>
          </li>
        </ul>
      </nav>

      <div className="w-w-pdf h-h-pdf mt-16 mb-3 mx-auto border border-yellow-600 text-gray-900 bg-white">
        <header className="mb-12">
          <img src={BannerReceipt} alt="banner-receipt" className="w-full" />
          <h1 className="text-2xl mt-10 px-16 font-semibold">
            PT. PUSAKA PRIMA TRANSPORT
          </h1>
          <p className="px-16 text-xs">
            Jl. Mampang Prapatan Raya No.60 - Jakarta Selatan 12790 - INDONESIA
            - Telephone: (021) 7989000, 7989111 - Fax: (021) 7989102
          </p>
          <h3 className="mt-8 px-16 text-2xl font-semibold">RECEIPT</h3>
        </header>

        <main className="px-16">
          <article>
            <span className="w-full flex gap-4">
              <p className="w-40 font-semibold">Customer Name</p>
              <p>: {displayCustomerName}</p>
            </span>
            <span className="w-full flex gap-4">
              <p className="w-40 font-semibold">Amount</p>
              <p>: {displayAmountWords}</p>
            </span>
            <span className="w-full mt-8 flex gap-4">
              <p className="w-40 font-semibold">Booking Code</p>
              <p>: {displayBookingCode}</p>
            </span>
            <span className="w-full flex gap-4">
              <p className="w-40 font-semibold">Periode of Car Usage</p>
              <p>: {displayPeriodeUsage}</p>
            </span>
            <p className="mt-8">{displayNoteExplanation}</p>
            <div className="mt-16 flex justify-between items-center">
              <span className="py-1 border border-gray-500">
                <p className="w-max px-2 font-semibold bg-yellow-200">
                  Amount IDR. <span> {displayAmountNumber}</span>
                </p>
              </span>
              <span className="font-semibold flex flex-col items-center gap-6">
                <p>Jakarta, {displaySignTypeDate}</p>
                <img src={SignReceipt} alt="" className="w-32" />
                <p>Golden Bird Jakarta</p>
              </span>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};
