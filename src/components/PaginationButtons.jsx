"use client"

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const searchTerm = searchParams.get("searchTerm")
  let startIndex = +searchParams.get("start") || 1;
  startIndex = startIndex < 1 ? 1 : startIndex; // Ensure startIndex is always 1 or greater
  const previousDisabled = startIndex <= 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {!previousDisabled && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 1}`}
        >
          <div className="flex flex-col cursor-pointer items-center  hover:underline">
            <BsChevronLeft className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link 
        href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 1}`}
      >
        <div className=''>
          <BsChevronRight className='h-5' />
          <p>Next</p> 
        </div>
      </Link>
    </div>
  )
}
