import { useState } from "react";

export const useTemplateMessage = () => {
  // State to manage the copy status of the template message
  const [copyTemplate, setCopyTemplate] = useState("");

  // Function to handle copying the template message to the clipboard
  const copyButtonHandleClick = (template) => {
    setCopyTemplate(template);
    navigator.clipboard.writeText(template);
  };

  // Return the state and handler function for use in components
  return { copyTemplate, setCopyTemplate, copyButtonHandleClick };
};
