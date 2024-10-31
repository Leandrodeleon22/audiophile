import React from "react";
import Image from "next/image";
import ProductDescription from "./ProductDescription";
const ZX7speaker = () => {
  const XX99MARKII = [
    "",
    "ZX7",
    "speaker",
    "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  ];

  return (
    <section className="mb-[161px] gap-10 flex">
      <div className="flex flex-col justify-center  w-1/2">
        <ProductDescription
          version={XX99MARKII[1]}
          headphones={XX99MARKII[2]}
          description={XX99MARKII[3]}
        />
      </div>
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-zx7-speaker.jpg"
          width={540}
          height={560}
          alt="XX99 MARK II"
        />
      </div>
    </section>
  );
};

export default ZX7speaker;
