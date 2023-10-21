import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function ViewPosting() {
  const CHATS = [
    {
      id: 1,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isClient: true,
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      isClient: false,
    },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isClient: true,
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      isClient: false,
    },
  ]
  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <section className="p-4 flex flex-col md:flex-row md:px-16 items-center gap-12 w-full mx-auto py-[50px] md:py-[80px]">
        <div className="md:w-2/3 w-full">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Digital Marketing Manager
          </h1>
          <p className="text-slate-200 text-lg font-medium md:text-xl mt-4">
            $8000 USD • 2 days ago
          </p>
          <div className="py-8">
            <p className="text-lg font-medium">Assigned To:</p>
            <div className="p-4 border-2 bg-app-grey-light border-app-grey-light rounded-md mt-2 max-w-lg">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    unoptimized
                    className="md:w-12 rounded-full md:h-12 w-10 h-10 object-cover"
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                    alt="company logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="">
                  <h1 className="text-base  font-semibold">Freelancer 1</h1>
                  <div className="flex gap-4 text-base font-medium">
                    <p>Junior</p>
                    <p>|</p>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-app-grey-light bg-app-grey-light rounded-md max-w-lg">
            <p className="text-md">Progress</p>
            <div className="mt-4">
              <div className="overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 w-1/2 rounded-full bg-app-slate-blue"></div>
              </div>
              <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                <li className="flex items-center justify-start text-app-slate-blue/70 sm:gap-1.5">
                  <span className="hidden sm:inline"> Sub Task 1 </span>
                  <CheckCircle className="h-5 w-5" />
                </li>

                <li className="flex items-center justify-center text-app-slate-blue/70 sm:gap-1.5">
                  <span className="hidden sm:inline"> Sub Task 2 </span>
                  <CheckCircle className="h-5 w-5" />
                </li>
                <li className="flex items-center justify-end sm:gap-1.5">
                  <span className="hidden sm:inline"> Sub Task 3 </span>
                  <CheckCircle className="h-5 w-5" />
                </li>
              </ol>
            </div>
          </div>
          <div className="p-4 border-2 border-app-grey-light bg-app-grey-light rounded-md mt-4 max-w-lg">
            <p className="text-md">View Files</p>
            <div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
            </div>
          </div>
          <div className="flex gap-2 max-w-lg mt-4 ">
            <Button variant={"outline"} className="h-12 w-full text-base">
              Accept
            </Button>
            <Button variant={"outline"} className="h-12 w-full text-base">
              Decline
            </Button>
          </div>
        </div>
        <div className=" h-[600px] md:w-3/4 w-full ">
          <div className="flex flex-col flex-grow w-full h-full bg-app-grey-light shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              {CHATS.map((chat) => (
                <div key={chat.id}>
                  {chat.isClient ? (
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                      <div className="p-3 bg-gray-600/50 rounded-r-lg rounded-bl-lg">
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end ">
                      <div className="bg-app-slate-blue text-white p-3 rounded-l-lg rounded-br-lg">
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-500/50 p-4">
              <Input className="w-full" placeholder="Type a message" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewPosting;
