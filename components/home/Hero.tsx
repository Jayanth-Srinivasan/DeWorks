import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <main className="bg-[#161616] bg-[url('/assets/line-bg.png')] w-full h-fit">
            <div className="w-full h-full p-4 md:px-16 py-[50px] md:py-[80px] lg:max-w-4xl lg:mx-auto text-white flex gap-6 justify-cente items-center flex-col text-center">
                <div className="flex flex-col gap-4 md:gap-8">
                    <h1 className="text-[42px] leading-tight md:text-6xl lg:text-7xl font-bold font-outfit">
                        A spot for creatives to get a job
                    </h1>
                    <p className="text-lg font-medium">
                        Get your dream job, with offers from different countries
                        and job positions. Apply today to get internships,
                        fresher, work-from-home jobs.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-4 md:flex-row">
                    <Input className="" placeholder="Search Job or Companies"/>
                    <Button>Explore</Button>
                </div>
            </div>
        </main>
    );
};

export default Hero;
