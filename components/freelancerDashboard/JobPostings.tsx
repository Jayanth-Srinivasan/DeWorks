import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarRange } from "lucide-react";
import { useRouter } from "next/router";

function JobPostings() {
  const router = useRouter();
  return (
    <section className="mt-4 font-outfit">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(5)
          .fill(true)
          .map((post, idx) => (
            <div
              className="w-full flex flex-col lg:flex-ro md:justify-between md:items-center gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
              key={idx}
            >
              <div className="flex flex-col gap-4">
                <h2 className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
                  Category
                </h2>
                <h1 className="font-semibold text-2xl">
                  Digital Marketing Manager
                </h1>
                <div className="text-base flex items-center gap-4">
                  <p>
                    <span className="font-medium">8000</span> USD
                  </p>
                  <p>•</p>
                  <p className="flex items-center gap-2">
                    <CalendarRange strokeWidth={1.5} size={18} /> 2 days ago
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                  <span className="text-base  font-semibold">
                    Assigned by:{" "}
                  </span>
                  <h1 className="text-base  font-semibold">Client 1</h1>
              </div>
              <Button
                onClick={() => router.push(`/dashboard/freelancer/posting/${idx}`)}
                variant={"secondary"}
                className="h-12 w-full text-base"
              >
                View Job
              </Button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default JobPostings;
