import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <section
      className={`bg-custom-light-gray rounded-md py-6 px-5 ${className}`}
    >
      {children}
    </section>
  );
}

export default Card;
