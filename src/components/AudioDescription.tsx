import Image from "next/image";
import React from "react";

const AudioDescription = () => {
  return (
    <section className=" flex mb-[20rem] justify-between h-[58.8rem]">
      <div className=" w-1/2 flex flex-col justify-center">
        <h1 className="uppercase font-bold text-[4rem] max-w-[44.5rem] tracking-[1.43px] leading-[4.4rem] mb-[3.2rem]">
          Bringing you the{" "}
          <span className="text-[var(--orange-main)]"> best</span> audio gear
        </h1>
        <p className="leading-[2.5rem] text-[1.5rem] max-w-[44.5rem] font-medium opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="bg-orange-200 w-1/2 overflow-hidden rounded-[10px] ">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          width={550}
          height={100}
          alt="image-best-gear"
        />
      </div>
    </section>
  );
};

export default AudioDescription;
