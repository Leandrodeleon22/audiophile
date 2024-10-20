import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[36.5rem]">
      <Wrapper>
        <div className="flex">
          <div className="bg-green-700 w-1/2">left</div>
          <div className="bg-orange-600 w-1/2"> right</div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
