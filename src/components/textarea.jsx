export const TextArea = ({
  variant = "primary",
  className,
  id,
  placeholder = "Placeholder...",
  ...props
}) => {
  const baseStyle =
    "w-full h-24.5 p-2 outline-none border border-gray-300 rounded-md resize-none transition-all duration-300 ease-in-out bg-gray-50";
  const variants = {
    primary: "focus:border-yellow-600",
    danger: "focus:border-pink-500",
    outline: "focus:border-gray-600",
  };

  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className || ""}`}
      {...props}
    ></textarea>
  );
};
