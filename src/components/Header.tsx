import React from "react";
import Wrapper from "./Wrapper";

import ButtonOrange from "./ButtonOrange";

const Header = () => {
  return (
    <header className="bg-[url('/assets/home/desktop/image-hero.jpg')]  min-h-screen bg-center  bg-contain w-full bg-no-repeat bg-[#191818] text-white bg">
      <Wrapper>
        <div className="flex max-w-[39.8rem]  mt-[12.8rem]  items-center">
          <div className="max-w-[39.8rem] mt-[10rem]">
            <h2 className="uppercase tracking-[10px] text-[14px] opacity-49.64 ">
              new product
            </h2>
            <h1 className="uppercase font-bold text-[5.6rem] tracking-[2px] leading-[58px] my-[1.9rem]">
              XX99 Mark II Headphones
            </h1>
            <p className="font-medium mb-[4rem] text-[1.5rem] leading-[25px] max-w-[34.9rem] opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ButtonOrange>see product</ButtonOrange>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
