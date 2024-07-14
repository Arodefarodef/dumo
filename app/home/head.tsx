"use client";

import React, { useState } from "react";
import Drop from "./drop";

const Home = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const header = [
    {
      name: "Home",
      url: "/",
      id: 1,
    },
    {
      name: "Sec1",
      url: "/sec1",
      id: 1,
    },
    {
      name: "Sec2",
      url: "/sec2",
      id: 1,
    },
    {
      name: "sec3",
      url: "/sec3",
      id: 1,
    },
  ];
  return (
    <div className="relative w-full">
      <div className="w-full border-b h-[70px] flex items-center justify-center">
        <div className="flex w-[90px] h-full items-center justify-between">
          <div className="flex items-center justify-start gap-4 text-[12px] uppercase">
            <p className="font-bold">LOGO</p>
            <div className="flex gap-4">
              {header?.map((el) => (
                <nav
                  key={el.id}
                  className="cursor-pointer hover:bg-slate-500 rounded-md py-2 px-6 duration-300 transition-all"
                >
                  {el.name}
                </nav>
              ))}
            </div>
          </div>
          <p className="hidden md:block">
            <button
              className="text-white bg-purple-500 py-3 px-8 rounded-md uppercase"
              onClick={onToggle}
            >
              MENU
            </button>
          </p>
        </div>
      </div>

      {toggle && (
        <div className="absolute right-6">
          <Drop header={header} onToggle={onToggle} />
        </div>
      )}
    </div>
  );
};

export default Home;
