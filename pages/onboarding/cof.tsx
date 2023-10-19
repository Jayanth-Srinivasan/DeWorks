import { Building2, Users2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
function Cof() {
    const [userType, setUserType] = useState<String>("");
    const router = useRouter();
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="px-12 py-16 md:max-w-3xl border border-app-grey-light bg-app-grey-light rounded-md w-full flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-3xl text-2xl font-semibold text-center ">
          Join as a client or freelancer
        </h1>
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
        <div>
          <Button
            variant={"default"}
            className="bg-blue-500 w-full hover:bg-blue-600 transition-all duration-300 text-white"
            onClick={() => router.push(`/onboarding/${userType}`)}
          >
            {userType === "" ? "Pick One" : `Join as ${userType}`}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Cof;
