import { Button } from "../components/button";
import { Link } from "react-router-dom";
// import { useTemplateMessage } from "../hooks/use-template-message";
// import TemplateMessage from "../utils/template-message.txt?raw";
import { ArrowLeft } from "lucide-react";

export const ReceiptNavigationLayout = ({ onClick }) => {
  // const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
  //   useTemplateMessage();

  return (
    <nav className="max-w-4xl p-4 mx-auto rounded sticky top-0 backdrop-blur-xl">
      <ul className="flex justify-between items-center">
        <li>
          <Link
            to={"/"}
            className="w-max flex items-center gap-1 text-blue-600 transition-all duration-300 ease-in-out hover:gap-2"
          >
            <ArrowLeft size={14} /> Edit Receipt or Copy Template
          </Link>
        </li>
        <li>
          <Button
            // variant="danger"
            className="max-w-w-52 min-w-52"
            onClick={onClick}
          >
            Download Receipt
          </Button>
        </li>
      </ul>

      <h1 className="mt-8 text-center text-xl tracking-widest">
        🧾 Receipt Preview
      </h1>
      {/* <ul className="p-4 flex justify-between gap-4 rounded-md bg-gray-50">
        <li>
          <Button
            variant="danger"
            className="max-w-w-52 min-w-52"
            onClick={onClick}
          >
            Download Your Receipt
          </Button>
        </li>
        <li>
          <Button
            className="w-52 min-w-52"
            onClick={() => copyButtonHandleClick(TemplateMessage)}
          >
            {copyTemplate ? (
              (() => {
                setTimeout(() => setCopyTemplate(""), 1000);
                return <>Template Message Copied</>;
              })()
            ) : (
              <>Copy Message Template</>
            )}
          </Button>
        </li>
      </ul> */}
    </nav>
  );
};
