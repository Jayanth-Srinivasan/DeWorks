import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
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
      title: "Schedule",
      link: "/schedule",
    },
    {
      title: "Call for Papers",
      link: "/papers",
    },
    {
      title: "Publication",
      link: "/publications",
    },
    {
      title: "Committee",
      link: "/commitee",
    },
    
    {
      title: "Contact Us",
      link: "/#contact",
    },
  ];
  return (
    <header className="px-4 md:p-0 sticky top-0 bg-white z-50 flex items-center justify-between md:px-16 lg:max-w-8xl lg:mx-auto">
      <Link href={"/"}>
        <h1 className="">DeWorks</h1>
      </Link>
      <div className="font-semibold">
        <ul className=" lg:flex text-center text-sm xl:text-base items-center text-slate-300 hidden">
          {NAVLINKS.map(({ title, link }, idx) => (
            <li
              key={idx}
              className="p-5 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
            >
              <Link href={link}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu strokeWidth={1.5} size={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>ICACST-23</SheetTitle>
              <SheetDescription>
                <nav className="contents font-semibold ">
                  <ul className="mx-auto flex flex-col items-center text-slate-300">
                    {NAVLINKS.map(({ title, link }, idx) => (
                      <li
                        key={idx}
                        className="p-2 active text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400"
                      >
                        <Link href={link}>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button
                  className="font-bold px-8 py-2 lg:flex flex-row hidden"
                >
                  Get Started
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:inline-flex">
        <Button
          className="font-bold px-8 py-2 lg:flex flex-row hidden"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}

export default Header;
