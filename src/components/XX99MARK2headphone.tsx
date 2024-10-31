import Image from "next/image";
import React from "react";

import ProductDescription from "@/components/ProductDescription";
const XX99MARK2headphone = () => {
  const XX99MARKII = [
    "New Product",
    "XX99 Mark II",
    "headphones",
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  ];

  return (
    <section className="my-[161px] gap-10 flex">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
          width={540}
          height={560}
          alt="XX99 MARK II"
        />
      </div>
      <div className="flex flex-col justify-center pl-[55px] w-1/2">
        <ProductDescription
          newProduct={XX99MARKII[0]}
          version={XX99MARKII[1]}
          headphones={XX99MARKII[2]}
          description={XX99MARKII[3]}
        />
      </div>
    </section>
  );
};

export default XX99MARK2headphone;
