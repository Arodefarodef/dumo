import Image from "next/image";
import React from "react";
import dumo from "@/public/dumo.svg";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-[80px] flex justify-center items-center">
      <div className="flex items-center justify-between w-[76%] h-[80px] p-7  border-b">
        <div className="flex items-center justify-between gap-4">
          <Image width={150} height={150} src={dumo} alt="" />
          <div className="gap-4 flex justify-between items-center text-[20px] text-gray-400">
            <Link href="/product">Product</Link>
            <Link href="/product">Customer</Link>
            <Link href="/product">Company</Link>
            <Link href="/product">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="text-[25px] bg-blue-300 text-blue-800 border rounded-md p-2">
            <FaPhone />
          </div>
          <div className="border rounded-md bg-blue-500 p-3 text-white text-[18px] font-semibold">
            My Duno Cloud
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
