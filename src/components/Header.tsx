import React from "react";
import Wrapper from "./Wrapper";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover  min-h-screen text-white bg">
      <NavBar />
      <Wrapper>
        <div className="flex max-w-[39.8rem]  mt-[12.8rem] items-center">
          <div className="max-w-[39.8rem]">
            <h2 className="uppercase">new product</h2>
            <h1 className="uppercase font-bold text-[5.6rem] tracking-[2px] leading-[58px]">
              XX99 Mark II Headphones
            </h1>
            <p className="font-medium text-[1.5rem] leading-[25px] max-w-[34.9rem] opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

            <button className="bg-green-500">see product</button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
