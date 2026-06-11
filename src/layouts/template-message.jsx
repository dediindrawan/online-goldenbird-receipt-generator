import TemplateMessage from "../utils/template-message.txt?raw";
import { Button } from "../components/button";
import { useTemplateMessage } from "../hooks/UseTemplateMessage";

export const TemplateMessageLayout = () => {
  // Use the custom hook to manage template message state and copy functionality
  const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
    useTemplateMessage();

  return (
    <div className="p-8 border border-gray-300 rounded-md whitespace-pre-line bg-gray-50">
      {/* Raw Template Message */}
      <article>{TemplateMessage}</article>

      {/* Copy Button */}
      <Button
        className="max-w-40 mt-8 px-4"
        onClick={() => copyButtonHandleClick(TemplateMessage)}
      >
        {/* Copy Status */}
        {copyTemplate
          ? setTimeout(() => setCopyTemplate(""), 1000) && "Template Copied"
          : "Copy Template"}
      </Button>
    </div>
  );
};
