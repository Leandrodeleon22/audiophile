import Image from "next/image";
import React from "react";
import ButtonOrange from "./ButtonOrange";

const XX99MARK2headphone = () => {
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
        <h2 className="text-[14px] tracking-[10px] text-[var(--orange-main)]">
          NEW PRODUCT
        </h2>

        <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px]  mt-[1.5rem]">
          XX99 Mark II
        </h1>
        <h1 className="font-bold uppercase text-[4rem] tracking-[1.43px] leading-[44px] mb-[3.2rem] ">
          Headphones
        </h1>
        <p className="opacity-50 leading-[2.5rem] text-[15px] mb-[4rem] max-w-[44.45rem]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <ButtonOrange className="text-white">See Product</ButtonOrange>
      </div>
    </section>
  );
};

export default XX99MARK2headphone;
