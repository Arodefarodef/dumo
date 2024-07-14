import React, { FC } from "react";

interface iProps {
  header: {}[];
  onToggle?:any;
}

const Drop: FC<iProps> = ({ header, onToggle }) => {
  return (
    <div className="w-[300px] rounded-b-md bg-slate-500 min-h-[400px]">
      Drop down
      <div className="pt-10 px-4">
        {header.map((el: any) => (
          <div
            key={el.id}
            className="w-full h-[45px] flex justify-center items-center hover:bg-neutral-800 hover:text-white cursor-pointer transition-all duration-300"
          >
            {el.name}
          </div>
        ))}
      </div>
      <div className="my-5 border-b border-slate-500">
        <hr />
      </div>
      <div className="w-full h-[50px] bg-black text-white flex justify-center items-center cursor-pointer">
        Sign in
      </div>
    </div>
  );
};

export default Drop;
