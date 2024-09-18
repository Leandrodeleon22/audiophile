import React, { PropsWithChildren, ReactNode } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="w-[110rem] mx-auto">{children}</div>;
};

export default Wrapper;
