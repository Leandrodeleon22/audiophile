import React from "react";

const Earphones = () => {
  return (
    <section className="flex gap-[3rem]  h-[32rem] mb-[20rem]">
      <div className="bg-red-400 w-full rounded-[8px] bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]"></div>
      <div className="bg-[#f1f1f1] flex items-center w-full rounded-[8px] ">
        <div className=" ml-[9.5rem]">
          <h1 className="text-[2.8rem] font-bold tracking-[2px]">
            YX1 EARPHONES
          </h1>
          <button className="tracking-[1px] font-bold border border-black border-solid text-[1.3rem] px-[3rem] py-[1.5rem] mt-[4rem]">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Earphones;
