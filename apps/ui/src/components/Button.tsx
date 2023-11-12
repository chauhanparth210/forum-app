import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...attributes }: ButtonProps) {
  return (
    <button
      className={`text-white bg-custom-blue rounded py-3 ${className}`}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Button;
