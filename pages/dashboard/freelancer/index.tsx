import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientPostings from "@/components/clientDashboard/ClientPostings";
import Notifications from "@/components/clientDashboard/Notifications";
import Freelancers from "@/components/clientDashboard/Freelancers";
import ConnectWalletButton from "@/components/connectWalletButton";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import JobPostings from "@/components/freelancerDashboard/JobPostings";

function ClientDashboard() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex flex-1 items-center justify-end gap-8">
            
            <ConnectWalletButton />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-8 md:items-center gap-4 md:gap-0">
          <div className="">
            <h1 className="text-3xl font-bold md:text-5xl">Dashboard</h1>

            <p className="mt-1.5 text-sm text-slate-300">
              Your Profile has seen a 14% increase in traffic in the last month.
              Keep it up! 🚀
            </p>
          </div>
          <div>
            <Button variant={"outline"} className="h-12 " asChild>
              <Link href={"/find-a-job"}>Find a Job</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-[50px] md:py-[80px]">
        <div className="w-full">
          <Tabs defaultValue="postings" className="text-sm md:text-base w-full">
            <TabsList className="w-fit">
              <TabsTrigger value="postings">Your Jobs</TabsTrigger>
              <TabsTrigger value="notification">Notification</TabsTrigger>
            </TabsList>
            <TabsContent value="postings">
              <JobPostings/>
            </TabsContent>
            <TabsContent value="notification">
              <Notifications />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

export default ClientDashboard;
