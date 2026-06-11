import { Label } from "../components/label";
import { TextArea } from "../components/textarea";

export const TextareaLayout = ({
  variant = "primary",
  labelText,
  id,
  name = id,
  placeholder = "",
  errorMessage,
  ...props
}) => {
  const baseStyle = "flex flex-col gap-1";

  return (
    <section className={baseStyle}>
      <Label htmlFor={id} variant={variant}>
        {labelText}
      </Label>

      <TextArea
        variant={variant}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        {...props}
      />

      {errorMessage && (
        <small id={`${id}-error`} className="italic text-pink-500 hidden">
          {errorMessage}
        </small>
      )}
    </section>
  );
};
