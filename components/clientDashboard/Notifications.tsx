import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CalendarRange } from "lucide-react";

function Notifications() {
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
              <div className="flex gap-4 items-center">
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
                    <p>
                      Is interested to work on your job posting &quot;Job
                      Posting&quot;
                    </p>
                  </div>
                </div>
              </div>
              <Button variant={"secondary"} className="h-12 w-full text-base">
                View Profile
              </Button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Notifications;
