import Image from "next/image";
import React from "react";

import ProductDescription from "@/components/ProductDescription";
const ZX9speaker = () => {
  const XX99MARKII = [
    "New Product",
    "ZX9",
    "earphones",
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  ];

  return (
    <section className="my-[161px] gap-10 flex">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-zx9-speaker.jpg"
          width={560}
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

export default ZX9speaker;
