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
      <div className="flex w-full p-6 items-center justify-between flex-col">
          <Link href={"/"}>
            <Image
              src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google logo"
              height={40}
              width={120}
            />
          </Link>
          <div className="flex-1">
            <SearchBox />
          </div>

        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2 md:ml-0">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
