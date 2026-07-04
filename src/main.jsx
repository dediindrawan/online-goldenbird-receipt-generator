import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";

import { RootPage } from "./pages/root.jsx";
import { ReceiptPage } from "./pages/receipt-page/index.jsx";
import { SystemUsagePolicyPage } from "./pages/system-usage-policy-page/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/receipt-preview",
    element: <ReceiptPage />,
  },
  {
    path: "/system-usage-policy",
    element: <SystemUsagePolicyPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
