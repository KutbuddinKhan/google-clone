import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
        <Link href={"/"}>
          <Image
            src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
            height={40}
            width={120}
          />
        </Link>
        <div className="mt-4 md:mt-0 md:flex-1">
          <SearchBox />
        </div>

        <div className="hidden md:flex md:space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-4 md:px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all mt-4 md:mt-0">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
