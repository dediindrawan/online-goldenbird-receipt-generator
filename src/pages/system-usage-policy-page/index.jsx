import { Link } from "react-router-dom";
import { SystemUsagePolicyContentLayout } from "../../layouts/system-usage-policy-content-layout";

export const SystemUsagePolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-4 px-4">
      <SystemUsagePolicyContentLayout />
      <Link
        to={"/"}
        className="mt-6 inline-block text-xs underline text-blue-600 hover:no-underline"
      >
        Kembali ke halaman utama
      </Link>
    </div>
  );
};
