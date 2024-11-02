import Image from "next/image";
import React from "react";

import ProductDescription from "@/components/ProductDescription";
const YX1earphone = () => {
  const XX99MARKII = [
    "New Product",
    "YX1 Wireless",
    "earphones",
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  ];

  return (
    <section className="my-[161px] gap-10 flex">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/product-yx1-earphones/desktop/image-product.jpg"
          width={560}
          height={560}
          alt="XX99 MARK II"
          className="h-auto w-auto"
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

export default YX1earphone;
