import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function clientDashboard() {
  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex flex-1 items-center justify-end gap-8">
            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <Image
                alt="Man"
                src={
                  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                }
                width={100}
                height={100}
                className="rounded-full object-cover w-12 h-12"
              />

              <p className="ms-2 hidden text-left text-sm md:block">
                <span className="block font-medium">Eric Frusciante</span>

                <span className="text-slate-300"> eric@frusciante.com </span>
              </p>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-8 items-center">
          <div className="">
            <h1 className="text-3xl font-bold md:text-5xl">Dashboard</h1>

            <p className="mt-1.5 text-sm text-slate-300">
              Your website has seen a 52% increase in traffic in the last month.
              Keep it up! 🚀
            </p>
          </div>
          <div>
            <Button variant={"outline"} className="h-12" asChild>
              <Link href={"/post-a-job"}>Post a Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default clientDashboard;
