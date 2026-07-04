import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useReceiptPdfDownload = () => {
  const downloadPDF = async (receiptRef) => {
    if (!receiptRef?.current) return;

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

    pdf.save("Golden Bird Receipt.pdf");
  };

  return downloadPDF;
};
