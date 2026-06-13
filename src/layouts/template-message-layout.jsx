import TemplateMessage from "../utils/template-message.txt?raw";
import { Button } from "../components/button";
import { useTemplateMessage } from "../hooks/UseTemplateMessage";
import { Clipboard, ClipboardCheck } from "lucide-react";

export const TemplateMessageLayout = () => {
  // Use the custom hook to manage template message state and copy functionality
  const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
    useTemplateMessage();

  return (
    <div className="mt-12">
      <section className="mb-8">
        <h2 className="mb-4 text-xl">
          🚀 Additional Message Template. Use this template?
        </h2>

        <p>
          For a more professional touch, copy and customize the message template
          below before sending it to your guests.
        </p>
      </section>

      <article className="w-full text-right whitespace-pre-line border border-gray-300 rounded-md bg-gray-50">
        {/* Copy Button */}
        <Button
          className="w-max text-xs sticky top-0"
          variant="tersier"
          onClick={() => copyButtonHandleClick(TemplateMessage)}
        >
          {/* Copy Status */}
          {copyTemplate ? (
            (() => {
              setTimeout(() => setCopyTemplate(""), 1000);
              return (
                <span className="flex justify-end items-center gap-1">
                  Copied! <ClipboardCheck size={18} />
                </span>
              );
            })()
          ) : (
            <span className="flex justify-end items-center gap-1">
              Copy <Clipboard size={18} />
            </span>
          )}
        </Button>

        {/* Raw Template Message */}
        <p className="px-10 pb-8 text-left">{TemplateMessage}</p>
      </article>
    </div>
  );
};
