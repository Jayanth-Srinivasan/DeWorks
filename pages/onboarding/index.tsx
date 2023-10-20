import { Building2, Users2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

function Onboarding() {
  const [userType, setUserType] = useState<String>("");
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200 flex justify-center items-center h-screen">
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Join as a client or freelancer
          </h2>
          <p className="text-slate-200 md:text-lg">
            Define your project&apos;s requirements, set milestones, and discuss
            terms with ease. Find the right expertise for your tasks with our
            streamlined posting process.
          </p>
        </div>
      <div className="w-full md:p-16 p-4 font-outfit bg-app-grey-light flex flex-col gap-4 rounded border border-white/10">
        <div className="flex md:flex-row flex-col gap-4 mt-4">
          <div
            onClick={() => setUserType("Client")}
            className={`flex flex-col gap-4 p-12 border-2 md:text-lg text-base font-medium  rounded-md transition-all duration-300 cursor-pointer shadow hover:scale-105 hover:border-app-slate-blue/50 ${
              userType === "Client"
                ? "border-app-slate-blue"
                : "border-slate-100/50"
            } }`}
          >
            <Building2 strokeWidth={1.5} size={32} />
            <span className="text-lg">
              I&apos;m a client, hiring for a project
            </span>
          </div>
          <div
            onClick={() => setUserType("Freelancer")}
            className={`flex flex-col gap-4 p-12 border-2 md:text-lg text-base font-medium  rounded-md transition-all duration-300 cursor-pointer shadow hover:scale-105 hover:border-app-slate-blue/50 ${
              userType === "Freelancer"
                ? "border-app-slate-blue"
                : "border-slate-100/50"
            } }`}
          >
            <Users2 strokeWidth={1.5} size={32} />
            I&apos;m a freelancer, looking for work
          </div>
        </div>
        <div className="mt-4">
          <Button
            variant={"default"}
            className="bg-blue-500 w-full hover:bg-blue-600 transition-all duration-300 text-white"
            onClick={() => router.push(`/onboarding/${userType}`)}
          >
            {userType === "" ? "Pick One" : `Join as ${userType}`}
          </Button>
        </div>
      </div>
      </section>
    </main>
  );
}

export default Onboarding;
