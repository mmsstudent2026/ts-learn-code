import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonVariant = "plane" | "solid" | "outline";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
      className={`px-4 py-2 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
