import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindAJob = () => {
    const CATEGORIES = [
        "Accounting",
        "Business & Consulting",
        "Human Research",
        "Marketing & Finance",
        "Design & Development",
        "Finance Managment",
        "Project Management",
        "Customer Service",
    ];
    const EXPERIENCE = ["Beginner", "Intermediate", "Expert"];

    const JOBS = [
        {
            title: "Accountant",
            location: "New York",
            category: "Accounting",
            pay: 60000,
            experience: "Beginner",
            description:
                "Responsible for managing financial transactions and creating financial reports.",
        },
        {
            title: "Business Consultant",
            location: "San Francisco",
            category: "Business & Consulting",
            pay: 85000,
            experience: "Intermediate",
            description:
                "Provides expert advice to businesses to help them improve their performance and efficiency.",
        },
        {
            title: "Research Analyst",
            location: "Chicago",
            category: "Human Research",
            pay: 75000,
            experience: "Expert",
            description:
                "Gathers and analyzes data to help organizations make informed decisions.",
        },
        {
            title: "Marketing Specialist",
            location: "Los Angeles",
            category: "Marketing & Finance",
            pay: 65000,
            experience: "Beginner",
            description:
                "Executes marketing campaigns and strategies to promote products and services.",
        },
        {
            title: "UX Designer",
            location: "Seattle",
            category: "Design & Development",
            pay: 80000,
            experience: "Intermediate",
            description:
                "Creates intuitive and user-friendly interfaces for digital products.",
        },
        {
            title: "Finance Manager",
            location: "Houston",
            category: "Finance Management",
            pay: 95000,
            experience: "Expert",
            description:
                "Oversees financial operations and ensures compliance with regulations.",
        },
        {
            title: "Project Manager",
            location: "Miami",
            category: "Project Management",
            pay: 70000,
            experience: "Beginner",
            description:
                "Coordinates and manages projects to ensure they are completed on time and within budget.",
        },
        {
            title: "Customer Support Representative",
            location: "Boston",
            category: "Customer Service",
            pay: 45000,
            experience: "Intermediate",
            description:
                "Provides assistance and resolves customer issues to ensure satisfaction.",
        },
    ];
    return (
        <main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
            <Header />
            <section className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
                <div className="mx-auto flex flex-col lg:max-w-3xl gap-4 text-center pb-[50px] md:pb-[80px]">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Find your Job
                    </h2>
                    <p className="text-slate-200 md:text-lg">
                        Browse listings, submit your proposals, and collaborate
                        with clients who value your talents. Find the projects
                        that align with your expertise and take your freelancing
                        career to the next level.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-4 lg:col-span-1 h-fit lg:sticky lg:top-24">
                        <div>
                            <h2 className="text-xl lg:text-3xl font-bold">
                                Category
                            </h2>
                            <div className="flex flex-col gap-2 mt-4">
                                {CATEGORIES.map((item, idx) => (
                                    <Link
                                        href={`/find-a-job/${item}`}
                                        key={idx}
                                    >
                                        <h1 className="text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10">
                                            {item}
                                        </h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl lg:text-3xl font-bold">
                                Job Level
                            </h2>
                            <div className="flex flex-col gap-2 mt-4">
                                {EXPERIENCE.map((item, idx) => (
                                    <Link
                                        href={`/find-a-job/${item}`}
                                        key={idx}
                                    >
                                        <h1 className="text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10">
                                            {item}
                                        </h1>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {JOBS.map((job, idx) => (
                            <div
                                className="w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
                                key={idx}
                            >
                                <div className="flex flex-col gap-4">
                                    <h2 className="bg-app-slate-blue rounded font-medium px-2 py-1 w-fit">
                                        {job.category}
                                    </h2>
                                    <h1 className="font-semibold text-2xl">
                                        {job.title}
                                    </h1>
                                    <div className="text-base flex items-center gap-4">
                                        <p>
                                            <span className="font-medium">
                                                {job.pay}
                                            </span>{" "}
                                            INR
                                        </p>
                                        <p>•</p>
                                        <p>{job.experience}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <Image
                                            unoptimized
                                            className="w-12"
                                            src="https://assets.website-files.com/63b3bf674632664abc613903/63b658d0d4a06814966f7225_company-04.png"
                                            alt="company logo"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div>
                                        <h1>Company Name</h1>
                                        <p className="flex items-center gap-1">
                                            <MapPin
                                                strokeWidth={1.5}
                                                size={16}
                                            />{" "}
                                            {job.location}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant={"secondary"}
                                    className="h-12 text-base"
                                >
                                    View Posting
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default FindAJob;
