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
import { Button } from "./ui/button";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter();
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
    ];
    return (
      <header className="px-4 md:p-0 sticky top-0 z-50 flex items-center h-[5rem] bg-app-grey-dark justify-between md:px-16  lg:mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold">DeWorks</h1>
        </Link>
        <div className="font-normal">
          <ul className=" lg:flex text-center text-md xl:text-lg items-center hidden">
            {NAVLINKS.map(({ title, link }, idx) => (
              <li key={idx} className="p-5">
                <Link
                  className="rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out"
                  href={link}
                >
                  <span>{title}</span>
                </Link>
              </li>
            ))}
            <li>
              <Button className="h-12" onClick={() => router.push("/onboarding")}>
                Post a Job
              </Button>
            </li>
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
                            className="rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out"
                            href={link}
                          >
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Button onClick={() => router.push("/onboarding")}>
                          Post a Job
                        </Button>
                      </li>
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
