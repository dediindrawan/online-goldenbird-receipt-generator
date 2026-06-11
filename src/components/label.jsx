export const Label = ({
  variant = "primary",
  className,
  htmlFor,
  children,
  ...props
}) => {
  const baseStyle = "w-max text-gray-600";
  const variants = {
    primary: "text-yellow-600",
    danger: "text-pink-500",
    outline: "text-gray-600",
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className || ""}`}
      {...props}
    >
      {children}
    </label>
  );
};
