import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="w-[110rem] mx-auto bg-red-400">{children}</div>;
};

export default Wrapper;
