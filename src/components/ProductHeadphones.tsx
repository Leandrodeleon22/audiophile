import React from "react";
import Image from "next/image";
import ButtonOrange from "./ButtonOrange";

interface ProductHeadphonesProp {
  newProduct?: string;
  version: string;
  headphones: string;
  description: string;
}

const ProductHeadphones: React.FC<ProductHeadphonesProp> = ({
  newProduct,
  version,
  headphones,
  description,
}) => {
  return (
    <section className="my-[161px] flex">
      <div className="w-1/2">
        <Image
          src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
          width={540}
          height={560}
          alt="XX99 MARK II"
        />
      </div>
      <div className="flex flex-col justify-center pl-[55px] w-1/2">
        <h2 className="text-[14px] tracking-[10px] uppercase text-[var(--orange-main)]">
          {newProduct}
        </h2>
        <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px]  mt-[1.5rem]">
          {version}
        </h1>
        <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px] mb-[3.2rem] ">
          {headphones}
        </h1>
        <p className="opacity-50 leading-[2.5rem] text-[15px] mb-[4rem] max-w-[44.5rem]">
          {description}
        </p>
        <ButtonOrange className="text-white">See Product</ButtonOrange>
      </div>
    </section>
  );
};

export default ProductHeadphones;
