import React from "react";

const Page = async () => {
  const url = "https://";
  const read = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await read.json();
  const tru = data?.data?.length;
  // console.log(data);
  return (
    <div>
      <div className="flex justify-start pt-10 md:pt-1 md:justify-center items-center flex-col gap-3 h-[100vh] bg-purple-500 ml-20">
        <h1 className="font-semibold text-[18px]">Customize Your Hero Page</h1>
        <form className="">
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[15px]">Title</label>
            <div className="border grid md:grid-col-4 items-center pb-1">
              <input
                className="col-span-3 md:col-span-4 outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your hero title here"
                name="title"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
