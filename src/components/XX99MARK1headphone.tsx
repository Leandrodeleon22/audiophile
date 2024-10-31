import React from "react";
import Image from "next/image";
import ProductDescription from "./ProductDescription";
const XX99MARK1headphone = () => {
  const XX99MARKII = [
    "",
    "XX99 Mark I",
    "headphones",
    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
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
          src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          width={540}
          height={560}
          alt="XX99 MARK II"
        />
      </div>
    </section>
  );
};

export default XX99MARK1headphone;
