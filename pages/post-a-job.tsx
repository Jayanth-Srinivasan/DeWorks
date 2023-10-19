import Header from '@/components/Header'
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';

const PostAJob = () => {

    const CATEGORIES = [
        "Accounting",
        "Business & Consulting",
        "Human Research",
        "Marketing & Finance",
        "Design & Development",
        "Finance Managment",
        "Project Management",
        "Customer Service"
    ];

    const EXPERIENCE = [
        "Beginner",
        "Intermediate",
        "Expert"
    ];

    return (
        <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
            <Header />
            <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
                <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Post a Job
                    </h2>
                    <p className="text-slate-200 md:text-lg">
                        Define your project&apos;s requirements, set milestones, and
                        discuss terms with ease. Find the right expertise for
                        your tasks with our streamlined posting process.
                    </p>
                </div>
                <div className="w-full p-4 font-outfit bg-app-grey-light flex flex-col gap-4 rounded border border-white/10">
                    <h1 className="font-bold text-xl md:text-2xl">
                        Job Details
                    </h1>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                            type="text"
                            className="h-12"
                            placeholder="Title of the job"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            type="text"
                            className="h-12"
                            placeholder="Leave it blank for remote location"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="category" className="mb-2">
                            Category
                        </Label>
                        <Select>
                            <SelectTrigger className="w-full h-12">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((item, idx) => (
                                    <SelectItem key={idx} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="location">Job Pay</Label>
                        <Input
                            type="number"
                            className="h-12"
                            placeholder="How much for the work"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="experiance" className="mb-2">
                            Experiance Level
                        </Label>
                        <Select>
                            <SelectTrigger className="w-full h-12">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                {EXPERIENCE.map((item, idx) => (
                                    <SelectItem key={idx} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Job Description</Label>
                        <Textarea
                            placeholder="Type your job description"
                            id="message"
                        />
                    </div>
                    <Button className="h-12">Post this Job</Button>
                </div>
            </section>
        </main>
    );
}

export default PostAJob