import { Link } from "react-router-dom";
import SystemUsagePolicy from "../../utils/system-usage-policy-message.txt?raw";

export const SystemUsagePolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-4 px-4">
      <h1 className="text-4xl font-semibold mb-8">
        System Usage Policy (STRICT INTERNAL SOP)
      </h1>
      <article className="whitespace-pre-wrap text-sm">
        {SystemUsagePolicy}
      </article>
      <Link
        to={"/"}
        className="mt-8 inline-block text-xs underline text-blue-500 hover:no-underline"
      >
        I understand, back to the main page
      </Link>
    </div>
  );
};
