import type { FC } from "react";
import type { ButtonProps, ButtonVariant } from "../types/PropTypes";

const variantClasses: Record<ButtonVariant, string> = {
  plane: "",
  solid: "bg-sky-600 text-white border border-sky-600",
  outline: "bg-transparent border border-sky-600 text-sky-600",
};

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "plane",
  ...rest
}) => {
  return (
    <button
      className={`px-4 py-2 duration-100 active:scale-95 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
