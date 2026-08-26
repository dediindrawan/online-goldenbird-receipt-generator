export const Button = ({
  variant = "primary",
  className,
  type = "submit",
  children,
  ...props
}) => {
  const baseStyle =
    "w-full p-2 border rounded-md cursor-pointer transition-all duration-300 ease-in-out";
  const variants = {
    primary:
      "border-yellow-600 text-white bg-yellow-600 hover:text-yellow-600 hover:bg-white",
    danger:
      "border-pink-500 text-white bg-pink-500 hover:text-pink-500 hover:bg-white",
    outline: "border-yellow-600 hover:text-white hover:bg-yellow-600",
    tersier:
      "border-gray-300 text-gray-600 bg-gray-300 hover:text-pink-500 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className || ""}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
