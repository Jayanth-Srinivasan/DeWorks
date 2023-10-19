import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";


function Header() {
  interface NavLinks {
    title: string;
    link: string;
  }
  [];

  const NAVLINKS: NavLinks[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Features",
      link: "/",
    },
    {
      title: "FAQs",
      link: "/",
    },
    {
      title: "Find a Job",
      link: "/",
    },
    {
      title: "Post a Job",
      link: "/",
    },
  ];
  return (
    <header className="px-4 md:p-0 sticky top-0 z-50 flex items-center justify-between md:px-16  lg:mx-auto">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">DeWorks</h1>
      </Link>
      <div className="font-normal">
        <ul className=" lg:flex text-center text-md xl:text-lg items-center hidden">
          {NAVLINKS.map(({ title, link }, idx) => (
            <li key={idx} className="p-5">
              <Link
                className={` ${
                  title === "Post a Job"
                    ? "bg-[#1e1e1e] px-8 py-2 border-2 border-[#ffffff12] hover:bg-[#2c56fe] transition-all duration-300 ease-in-out cursor-pointer rounded"
                    : "rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out"
                } `}
                href={link}
              >
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="lg:hidden py-4">
            <Menu strokeWidth={1.5} size={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-semibold">
                DeWorks
              </SheetTitle>
              <SheetDescription>
                <nav className="contents font-semibold ">
                  <ul className="mx-auto flex flex-col items-center ">
                    {NAVLINKS.map(({ title, link }, idx) => (
                      <li key={idx} className="p-2">
                        <Link
                          className={` ${
                            title === "Post a Job"
                              ? "px-8 py-2 border-2 border-[#ffffff12] bg-[#2c56fe] transition-all duration-300 ease-in-out cursor-pointer rounded"
                              : "rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out"
                          } `}
                          href={link}
                        >
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
