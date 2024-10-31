import React from "react";
import Image from "next/image";
import ProductDescription from "./ProductDescription";
const XX99MARK1headphone = () => {
  const XX99MARKII = [
    "",
    "XX59",
    "headphones",
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  ];

  return (
    <section className="mb-[161px] gap-10 flex">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-xx59-headphones.jpg"
          width={540}
          height={560}
          alt="XX99 MARK II"
        />
      </div>
      <div className="flex flex-col justify-center pl-[55px]  w-1/2">
        <ProductDescription
          version={XX99MARKII[1]}
          headphones={XX99MARKII[2]}
          description={XX99MARKII[3]}
        />
      </div>
    </section>
  );
};

export default XX99MARK1headphone;
