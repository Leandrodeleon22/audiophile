import React from "react";
import Image from "next/image";
import ButtonOrange from "./ButtonOrange";

interface ProductDescriptionProp {
  newProduct?: string;
  version: string;
  headphones: string;
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProp> = ({
  newProduct,
  version,
  headphones,
  description,
}) => {
  return (
    <>
      <h2 className="text-[14px] tracking-[10px] uppercase text-[var(--orange-main)]">
        {newProduct}
      </h2>
      <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px]  mt-[1.5rem]">
        {version}
      </h1>
      <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px] mb-[3.2rem] ">
        {headphones}
      </h1>
      <p className="opacity-50 leading-[2.5rem] text-[15px] mb-[4rem] max-w-[43.5rem]">
        {description}
      </p>
      <ButtonOrange className="text-white">See Product</ButtonOrange>
    </>
  );
};

export default ProductDescription;
