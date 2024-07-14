"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Sider = () => {
  const [toggle, setToggle] = useState(false);

  const things = [
    { id: 1, name: "Hero", url: "/hero" },
    { id: 2, name: "Sec 1", url: "/sec1" },
    { id: 3, name: "sec 2", url: "/sec2" },
    { id: 4, name: "sec 3", url: "/sec3" },
  ];
  return (
    <div>
      <div className="flex items-center w-[250px] h-[100%] bg-black absolute">
        <div className="flex flex-col items-center justify-center text-[18px] font-semibold h-[80%] w-[80%] gap-7">
          {things?.map((el) => (
            <Link
              href={el.url}
              key={el.id}
              className="cursor-pointer hover:bg-slate-500 rounded-md py-2 px-6 duration-300 transition-all text-white"
            >
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sider;
