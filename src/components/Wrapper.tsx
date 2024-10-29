import React, { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[110rem] mx-auto ">{children}</div>;
};

export default Wrapper;
