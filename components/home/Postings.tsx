import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";

function Postings() {
    return (
        <section className="font-outfit bg-[url('/assets/line-bg.png')]" id="postings">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-12 md:px-6 lg:py-16 lg:px-8">
                <div className="mx-auto  text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Popular job vacancy
                    </h2>
                </div>
                <div className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array(5)
                        .fill(true)
                        .map((post, idx) => (
                            <div
                                className="w-full flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10"
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
                                            <span className="font-medium">
                                                8000
                                            </span>{" "}
                                            USD
                                        </p>
                                        <p>•</p>
                                        <p>Junior</p>
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
                                        <h1>Webflow</h1>
                                        <p className="flex items-center gap-1">
                                            <MapPin
                                                strokeWidth={1.5}
                                                size={16}
                                            />{" "}
                                            Tokoyo Japan
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
    );
}

export default Postings;
