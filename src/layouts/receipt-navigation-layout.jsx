import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useTemplateMessage } from "../hooks/use-template-message";
import TemplateMessage from "../utils/template-message.txt?raw";

export const ReceiptNavigationLayout = ({ onClick }) => {
  const navigate = useNavigate();
  const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
    useTemplateMessage();

  return (
    <nav className="max-w-4xl mt-4 mx-auto p-8 text-center font-poppins border border-gray-300 rounded-md sticky top-0 bg-gray-50">
      <h1 className="mb-4 text-xl tracking-widest">🧾 Receipt Preview</h1>
      <ul className="flex justify-center gap-4">
        <li>
          <Button onClick={() => navigate(-1)} className="max-w-52 min-w-52">
            Back or Edit Your Receipt
          </Button>
        </li>
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
      </ul>
    </nav>
  );
};
