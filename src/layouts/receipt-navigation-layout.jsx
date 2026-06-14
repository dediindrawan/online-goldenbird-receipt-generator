import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useTemplateMessage } from "../hooks/use-template-message";
import TemplateMessage from "../utils/template-message.txt?raw";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const ReceiptNavigationLayout = ({ receiptRef }) => {
  const navigate = useNavigate();
  const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
    useTemplateMessage();

  const downloadPDF = async () => {
    console.log("clicked");
    const element = receiptRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("Goldenbird Receipt.pdf");
  };

  return (
    <nav className="max-w-4xl mt-4 mx-auto p-8 text-center font-poppins border border-gray-300 rounded-md sticky top-0 bg-gray-50">
      <h1 className="mb-4 text-xl tracking-widest">🧾 Receipt Preview</h1>
      <ul className="flex justify-center gap-4">
        <li>
          <Button onClick={() => navigate(-1)} className="max-w-w-52 min-w-52">
            Back or Edit Your Receipt
          </Button>
        </li>
        <li>
          <Button
            variant="danger"
            className="max-w-w-52 min-w-52"
            onClick={downloadPDF}
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
