import { Input } from "../components/input";
import { Label } from "../components/label";

export const InputLayout = ({
  variant = "primary",
  labelText,
  id,
  name = id,
  type = "text",
  placeholder = "",
  errorMessage,
  ...props
}) => {
  const baseStyle = "flex flex-col grow gap-1";

  return (
    <section className={baseStyle}>
      <Label htmlFor={id} variant={variant}>
        {labelText}
      </Label>

      <Input
        variant={variant}
        id={id}
        name={name}
        type={type}
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
