import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

function ViewFreelancerProfileDialog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"secondary"} className="h-12 w-full text-base">
            View Profile
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Freelancer Profile</DialogTitle>
            <DialogDescription>
              <section className="mt-4 font-outfit mx-auto">
                <div className="flex items-center  justify-between ">
                  <div className="flex items-center gap-4 ">
                    <Image
                      unoptimized
                      className="md:w-12 rounded-full md:h-12 w-10 h-10 object-cover"
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                      alt="company logo"
                      width={100}
                      height={100}
                    />
                    <h1 className="text-xl font-semibold text-stone-200">
                      Freelancer 1
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span>⭐⭐⭐⭐</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-2 text-stone-200 text-base my-4">
                  <span className="flex gap-2">
                    Experience Level : <p className="font-medium">Advanced</p>
                  </span>
                  <span className="flex gap-2">
                    Category :
                    <p className="font-medium">Design & Development</p>
                  </span>
                  <span className="flex gap-2">
                    Skills : 
                    <p className="font-medium">NextJs, TailwindCSS, ReactJs</p>
                  </span>
                  <span className="flex gap-2">
                    Projects Completed : <p className="font-medium">69</p>
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant={"outline"} className="h-12 w-full text-base">
                    Accept
                  </Button>
                  <Button variant={"outline"} className="h-12 w-full text-base">
                    Decline
                  </Button>
                </div>
              </section>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ViewFreelancerProfileDialog