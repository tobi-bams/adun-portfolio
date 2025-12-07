import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1300px] mx-auto px-5  md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
