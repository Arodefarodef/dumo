"use client";
import Image from "next/image";
import React, { FC } from "react";
interface iComp {
  title?: string;
  logo: string;
  description?: string;
  imagess: string[];
  links?: string;
  backgroundimage: string;
  sI?: boolean;
  bgImage: string;
  bg?: string;
  lm?: boolean;
}
const Component: FC<iComp> = ({
  logo,
  title,
  description,
  imagess,
  links,
  backgroundimage,
  sI,
  bgImage,
  bg,
  lm,
}) => {
  const myStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={myStyle}
      className={
        "grid grid-cols-2 sty  mt-16 gap-5 rounded-[22px] h-[450px] bg-[]"
      }
    >
      <div className=" h-[380px] w-[500px] ml-14 mt-12">
        <Image src={logo} alt="img" width={40} height={40} />
        <h1 className="text-[40px] font-bold mt-3"> {title} </h1>
        <h1 className="text-[18px] mt-5"> {description} </h1>
        <div className="flex items-center gap-5 mt-5">
          {sI ? (
            ""
          ) : (
            <>
              {imagess.map((el: any, i: any) => (
                <div key={i}>
                  <Image src={el} alt="#" width={50} height={50} />
                </div>
              ))}
            </>
          )}
        </div>
        {lm ? (
          <div>
            <h1 className="text-[18px] mt-12 underline text-white font-bold">
              LearnMore
            </h1>
          </div>
        ) : (
          <div className="rounded-3xl w-[85px] h-[35px] flex items-center justify-center bg-blue-400  text-[13px] text-white">
            Comingsoon
          </div>
        )}
      </div>
      <div className="object-fit flex justify-center items-center">
        <Image src={backgroundimage} alt="img" width={500} height={300} />
      </div>
    </div>
  );
};

const Comp = () => {
  return (
    <div className="flex w-full h-[1500px] justify-center items-center">
      <div className=" w-[80%] h-full  ">
        <Component
          bgImage="/"
          title="DUMO® Creator Cloud (DCC)."
          logo="/dumo5.svg"
          backgroundimage="/dumo6.svg"
          lm
          description="Run your creator & digital commerce business."
          imagess={["/dumo1.svg", "/dumo2.svg", "/dumo4.svg"]}
          bg="purple"
        />
        <Component
          bgImage="/"
          sI
          title="DUMO® Business Cloud (DBC)."
          logo="/zero.svg"
          backgroundimage="/invoice.png"
          description="Manage important aspects of your Growing Enterprise on one scalable operating system."
          imagess={[]}
        />
        <Component
          bgImage="/"
          title="DUMO® Developer Cloud (DDC)."
          logo="/icon1.svg"
          backgroundimage="/dumo7.svg"
          lm
          imagess={["/icon2.svg", "/icon3.svg", "/icon4.svg"]}
        />
      </div>
    </div>
  );
};

export default Comp;
