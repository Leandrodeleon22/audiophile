import Image from "next/image";
import React from "react";

const SpeakerZx9 = () => {
  return (
    <>
      <section className=" overflow-hidden bg-[var(--orange-main)] rounded-[8px] h-[56rem] bg-[url('/assets/home/desktop/pattern-circles.svg')]   flex   bg-no-repeat justify-between bg-[right_285px_top_-30px] mb-[4.8rem]">
        <div className=" flex flex-col justify-end mb-[-1.5rem] ml-[15rem] ">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={380}
            height={500}
            alt="speaker zx9"
          />
        </div>
        <div className=" flex flex-col justify-center  mr-[7rem] ">
          <div className="font-bold text-white text-[5.6rem] tracking-[2px] leading-[5.8rem]">
            <h1>ZX9</h1>
            <h1>SPEAKER</h1>
          </div>
          <p className="w-[35rem] font-medium text-white text-[1.5rem] leading-[2.5rem] my-[2.5rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white w-[16rem] font-bold tracking-[1px] text-[1.3rem] px-[3rem] py-[1.5rem]">
            SEE PRODUCT
          </button>
        </div>
      </section>
      <section className="bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] mb-[4.8rem] h-[32rem] rounded-[8px] flex items-center">
        <div className=" ml-[9.5rem]">
          <h1 className="font-bold text-[2.8rem] tracking-[2px]">
            ZX7 SPEAKER
          </h1>
          <button className="tracking-[1px] font-bold border border-black border-solid text-[1.3rem] px-[3rem] py-[1.5rem] mt-[4rem]">
            SEE PRODUCT
          </button>
        </div>

        {/* <div>
          <Image
            src="/assets/home/desktop/image-speaker-zx7.png"
            width={380}
            height={500}
            alt="speaker zx7"
          />
        </div> */}
      </section>
    </>
  );
};

export default SpeakerZx9;
