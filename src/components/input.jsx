export const Input = ({
  variant = "primary",
  className,
  id,
  type = "text",
  placeholder = "Placeholder...",
  ...props
}) => {
  const baseStyle =
    "w-full p-2 outline-none border border-gray-300 rounded-md transition-all duration-300 ease-in-out bg-gray-50";
  const variants = {
    primary: "focus:border-yellow-600",
    danger: "focus:border-pink-500",
    outline: "focus:border-gray-600",
  };

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className || ""}`}
      {...props}
    />
  );
};
