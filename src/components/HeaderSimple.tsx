import React from "react";
import Wrapper from "./Wrapper";

interface headerSimpleProps {
  title: string;
}

const HeaderSimple: React.FC<headerSimpleProps> = ({ title }) => {
  return (
    <header className=" min-h-[33.6rem] bg-black  text-white bg flex items-center">
      <Wrapper>
        <div className=" flex justify-center">
          <h1 className="uppercase font-bold text-[4.4rem] tracking-[1.43px] leading-[44px] mt-[9rem]">
            {title}
          </h1>
        </div>
      </Wrapper>
    </header>
  );
};

export default HeaderSimple;
