import TemplateMessage from "../utils/template-message.txt?raw";
import { Button } from "../components/button";
import { useTemplateMessage } from "../hooks/use-template-message";
import { Clipboard, ClipboardCheck } from "lucide-react";

export const TemplateMessageLayout = () => {
  // Use the custom hook to manage template message state and copy functionality
  const { copyTemplate, setCopyTemplate, copyButtonHandleClick } =
    useTemplateMessage();

  return (
    <div className="mt-12">
      <section className="mb-8">
        <h2 className="mb-4 text-lg sm:text-2xl">
          🚀 Additional Cover Letter Template. Use this template?
        </h2>

        <p>
          For a more professional touch, attach the receipt along with the cover
          letter template below before sending it to your guests. Copy the
          template and customize it as needed.
        </p>
      </section>

      <article className="w-full text-right whitespace-pre-line border border-gray-300 rounded-md bg-gray-50">
        {/* Copy Button */}
        <Button
          className="w-max text-xs sticky top-0 border-none rounded-tl-none rounded-br-none bg-yellow-200"
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
        <p className="px-4 pb-4 -mt-4 text-left">{TemplateMessage}</p>
      </article>
    </div>
  );
};
