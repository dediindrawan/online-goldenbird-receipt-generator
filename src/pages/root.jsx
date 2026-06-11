import ExGbReceipt from "../assets/example-gb-receipt.jpg";
import { Link } from "react-router-dom";
import { InputFormGroup } from "./form-page";
import { TemplateMessageLayout } from "../layouts/template-message";

export const RootPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 px-8">
      <header className="mb-8">
        <h1 className="text-3xl">
          Online <span className="text-yellow-600">Goldenbird</span> Receipt
          Generator
        </h1>

        <h2 className="mt-8 mb-2 text-xl">
          🧾 Create Professional Goldenbird Receipts
        </h2>

        <p>
          Create Goldenbird receipts instantly, complete all details, then
          download and share them with your guests easily. Happy working, team.
        </p>
      </header>

      <main>
        <div className="w-full flex flex-row-reverse justify-between gap-8">
          <div className="w-1/3 text-center min-h-full flex flex-col gap-1">
            <Link
              to={"receipt-preview"}
              className="w-max mx-auto text-blue-500 underline hover:no-underline"
            >
              Receipt Preview
            </Link>

            <img
              src={ExGbReceipt}
              alt="Receipt Preview"
              className="h-full border border-yellow-600 rounded-md"
            />
          </div>

          <div className="w-full">
            <InputFormGroup />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-2 text-xl">
            🚀 Additional Message Template. Use this template?
          </h2>

          <p className="mb-8">
            For a more professional touch, copy and customize the message
            template below before sending it to your guests.
          </p>

          <TemplateMessageLayout />
        </div>
      </main>

      <footer className="mt-12 mb-4 flex justify-between">
        <small>
          ©{new Date().getFullYear()} | Online Goldenbird Receipt Generator. All
          rights reserved.
          <br />
          Made with coffee by <Link>Dedi Indrawan</Link>
        </small>
        <small>
          <Link className="text-blue-500 underline hover:no-underline">
            Terms of Use
          </Link>
        </small>
      </footer>
    </div>
  );
};
