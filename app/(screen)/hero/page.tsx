// import { url } from "inspector";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const url =
    "https://dumo-git-main-fedoras-projects-0d26f1b8.vercel.app/api/here";
  const read = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await read.json();
  const check = data?.data?.length;
  console.log(data);

  const updateformAction = async (FormData: FormData) => {
    "use server";
    const title = FormData.get("title");
    const desc = FormData.get("desc");
    const image = FormData.get("image");
    const color = FormData.get("color");
    const fontSize = FormData.get("fontSize");
    const heroID = FormData.get("heroID");

    const Url = `https://dumo-git-main-fedoras-projects-0d26f1b8.vercel.app/${heroID}`;
    await fetch(Url, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        desc,
        image,
        color,
        fontSize,
      }),
    });
  };

  const ActionForm = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const desc = formData.get("desc");
    const image = formData.get("image");
    const color = formData.get("color");
    const fontSize = formData.get("fontSize");

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        image,
        color,
        fontSize,
      }),
    }).then(() => redirect("/here"));
  };

  return (
    <div>
      <div className="flex justify-start pt-10 md:pt-1 md:justify-center items-center flex-col gap-3 h-[100vh] bg-purple-500 ml-20">
        <h1 className="font-semibold text-[18px]">Customize Your Hero Page</h1>
        <form
          action={check === 0 ? ActionForm : updateformAction}
          className="w-[280px]  md:w-[400px] flex flex-col gap-3 border p-2 rounded-md"
        >
          <div className="flex flex-col gap-2 p-1">
            <label className="font-semibold text-[15px]">Title</label>
            <div className="border grid md:grid-col-4 items-center pb-1">
              <input
                className="col-span-3 md:col-span-4 outline-none p-1 rounded-sm placeholder:text-[12px] text-[12px]"
                type="text"
                placeholder="Enter your hero title here"
                name="title"
              />
              <div className="col-span-1 md:col-span-3 gap-5 pr-3 pl-1">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 justify-center items-center">
                    <span className="font-light text-[12px]">color:</span>
                    <input
                      defaultValue={data?.data[0]?.headercolor}
                      className="w-[20px] h-[20px]"
                      name="headercolor"
                      type="color"
                    />
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="font-light text-[10px]">Font:</span>
                    <select
                      className="font-semibold text-[10px] outline-none border"
                      name="headersize"
                    >
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
