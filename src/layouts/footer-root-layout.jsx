import { Link } from "react-router-dom";

export const FooterRootLayout = () => {
  return (
    <footer className="mt-12 mb-4 text-xs flex justify-between">
      <section>
        ©{new Date().getFullYear()} | Online Goldenbird Receipt Generator. All
        rights reserved.
        <br />
        Made with coffee by{" "}
        <Link to="https://dediindrawan.vercel.app" target="_blank">
          Dedi Indrawan
        </Link>
      </section>
      <section>
        <Link
          to={"/system-usage-policy"}
          className="text-blue-600 underline hover:no-underline"
        >
          System Usage Policy
        </Link>
      </section>
    </footer>
  );
};
